(function () {
  'use strict';

  angular.module('skiptrace.security')
    .factory('userSvc', userSvc);

  userSvc.inject = ['Idle', '$rootScope', '$window', '$q', 'storageSvc', 'accountClientSvc', 'activitySvc', 'logger'];
  /* @ngInject */
  function userSvc(Idle, $rootScope, $window, $q, storageSvc, accountClientSvc, activitySvc, logger) {
    var service = {
      signIn: signIn,
      signInExternal: signInExternal,
      signOut: signOut,
      setUser: setUser,
      addLocalLogin: addLocalLogin,
      removeLogin: removeLogin,
      setPassword: setPassword,
      changePassword: changePassword,
      getManageInfo: getManageInfo,
      getUserInfo: getUserInfo,
      addExternalLogin: addExternalLogin,
      registerExternal: registerExternal,
      register: register,
      checkUsernameAvailable: checkUsernameAvailable,
      checkEmailAvailable: checkEmailAvailable,
      info: {
        username: "",
        email: "",
        accessToken: "",
        roles: [],
        signedIn: false
      }
    };

    var activities = [];

    return service;

    function setUser(user) {
      if (user) {
        service.info.username = user.userName; 
        service.info.signedIn = true; 
        if (user.userRoles) {
          service.info.roles = user.userRoles.split(",");
        } else {
          service.info.roles = [];
        }
      } else {
        service.info.username = ""; 
        service.info.signedIn = false; 
        service.info.roles = [];
      }
      raiseEvent();
    }

    function signIn(user, remember) {
      activitySvc.busy("userSvc");

      return accountClientSvc.login(user)
        .then(function (result) {
          setUser(result.data);
          storageSvc.store("accessToken", result.data.access_token, remember);
          Idle.watch();
          return result;
        })
        .finally(function () {
          activitySvc.idle("userSvc");
        })

    }

    function signOut() {
      activitySvc.busy("userSvc");
      accountClientSvc.logout().finally(
        function () {
          Idle.unwatch();
          storageSvc.remove("accessToken");
          setUser();
          activitySvc.idle("userSvc");
        });
    }

    function setPassword(args) {
      activitySvc.busy("userSvc");
      return accountClientSvc.setPassword(args)
        .then(function (result) {
          logger.info("your password has been set");
          return result;
        })
        .catch(function (result) {
          logger.error(result.error);
          return $q.reject(result);
        })
        .finally(function () {
          activitySvc.idle("userSvc");
        })
    }

    function changePassword(args) {
      activitySvc.busy("userSvc");

      return accountClientSvc.changePassword(args)
        .then(function (result) {
          logger.info("your password has been changed");
          return result;
        })
        .catch(function (result) {
          logger.error(result.error);
          return $q.reject(result);
        })
        .finally(function () {
          activitySvc.idle("userSvc");
        })
    }

    function removeLogin(data) {
      activitySvc.busy("userSvc");
      return accountClientSvc.removeLogin(data)
        .then(null)
        .catch(function (result) {
          logger.error(result.error);
          return $q.reject(result);
        })
        .finally(function () {
          activitySvc.idle("userSvc");
        })
    }

    function getManageInfo() {
      activitySvc.busy("userSvc");
      return accountClientSvc.getManageInfo("/externalauth/association")
        .then(null)
        .catch(function (result) {
          logger.error(result.error);
          return $q.reject(result);
        })
        .finally(function () {
          activitySvc.idle("userSvc");
        })
    }

    function getUserInfo() {
      activitySvc.busy("userSvc");
      return accountClientSvc.getUserInfo()
        .then(null) //check this again Mario
        .catch(function (result) {
          logger.error(result.error);
          return $q.reject(result);
        })
        .finally(function () {
          activitySvc.idle("userSvc");
        })
    }

    function addLocalLogin(data) {
      return setPassword(data);
    }

    //register a new user and if the registration is successful signIn
    function registerExternal(registration) {
      activitySvc.busy("userSvc");
      return accountClientSvc.registerExternal(registration)
        .finally(function () {
          activitySvc.idle("userSvc");
        });
    }

    function register(registration, remember) {
      activitySvc.busy("userSvc");
      return accountClientSvc.register(registration)
        .then(function (result) {
          setUser(result.data);
          storageSvc.store("accessToken", result.data.access_token, remember);
          return result;
        })
        .finally(function () {
          activitySvc.idle("userSvc");
        })
    }

    function signInExternal(provider) {
      activitySvc.busy("userSvc");
      return accountClientSvc.getExternalLogin("/externalauth/signin", provider)
        .finally(
        function () {
          activitySvc.idle("userSvc");
        });
    }

    function addExternalLogin(externalLogin) {
      activitySvc.busy("userSvc");
      return accountClientSvc.addExternalLogin(externalLogin)
        .then(function (result) {
          $window.location.href = result.data.url;
        })
        .finally(function () {
          activitySvc.idle("userSvc");
        })
    }

    function checkEmailAvailable(modelValue, viewValue) {
      var dfd = $q.defer(), email = modelValue || viewValue;
      if (email) {
        dfd.promise = accountClientSvc.checkEmailAvailable(email);
      } else {
        dfd.resolve();
      }
      return dfd.promise;
    }

    function checkUsernameAvailable(modelValue, viewValue) {
      var dfd = $q.defer(), username = modelValue || viewValue;
      if (username) {
        dfd.promise = accountClientSvc.checkUsernameAvailable(username);
      } else {
        dfd.resolve();
      }
      return dfd.promise;
    }

    function raiseEvent() {
      $rootScope.$broadcast("userSvc:signedInChanged", { signedIn: service.info.signedIn });
    }
  }
})();