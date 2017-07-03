(function () {
  'use strict';

  angular.module('skiptrace.security')
    .factory('userManagementSvc', userManagementSvc);

  userManagementSvc.inject = ['$window', '$q', 'userSvc', 'activitySvc', 'logger'];
   /* @ngInject */
  function userManagementSvc($window, $q, userSvc, activitySvc, logger) {
    var loaded = false;
    var service = {
      load: load,
      loginProviders: [],
      userLogins: [],
      localLoginProvider: "",
      info: {
        hasLocalLogin: false,
        moreLoginsAvailable: false
      },
      addLogin: addLogin,
      removeLogin: removeLogin,
      changePassword: changePassword,
      addLocalLogin: addLocalLogin
    };

    return service;

    function load() {
      activitySvc.busy("userManagementSvc");
      return userSvc.getManageInfo("/externalauth/association", false)
        .then(
        function (result) {
          service.userLogins.length = 0;
          service.loginProviders.length = 0;
          if (result.data) {
            service.localLoginProvider = result.data.localLoginProvider;
          }
          result.data.logins.forEach(function (l) {
            service.userLogins.push(l);
          });
          result.data.externalLoginProviders.forEach(function (lp) {
            service.loginProviders.push(lp);
          });
          return result;
        },
        function (result) {
          logger.error(result.error);
          $q.reject(result);
        })
        .finally(
        function () {
          updateInfo();
          activitySvc.idle("userManagementSvc");
        });
    }

    //returns a promise
    function changePassword(args) {
      return userSvc.changePassword(args);
    }

    //returns a promise
    function addLocalLogin(externalLogin) {
      return userSvc.addLocalLogin(externalLogin)
        .then(
        function (result) {
          logger.info("your password has been set");
          service.userLogins.push({ loginProvider: service.localLoginProvider, providerKey: userSvc.info.username })
          service.info.hasLocalLogin = true;
          return result;
        },
        function (result) {
          service.info.hasLocalLogin = false;
          return $q.reject(result);
        });
    }

    function addLogin(provider) {
      $window.location.href = provider.url;
    }

    function removeLogin(userLogin) {
      activitySvc.busy("userManagementSvc");
      return userSvc.removeLogin(userLogin)
        .then(
        function (result) {
          var i = $.arrayIndexOf(service.userLogins, function (ul) {
            return ul.loginProvider === userLogin.loginProvider;
          });
          if (i !== -1) {
            service.userLogins.splice(i, 1);
          }
          if (userLogin.loginProvider === service.localLoginProvider) {
            service.info.hasLocalLogin = false;
          }
          logger.info(userLogin.loginProvider + " login removed.");
          return result;
        },
        function (result) {
          logger.error(result.error);
          return $q.reject(result);
        })
        .finally(
        function () {
          activitySvc.idle("userManagementSvc");
        });
    }

    function updateInfo() {
      service.info.hasLocalLogin = $.arrayContains(service.userLogins, function (lp) {
        return lp.loginProvider === service.localLoginProvider;
      });
      service.info.moreLoginsAvailable = service.userLogins.length < service.loginProviders.length;
    }
  }
})();