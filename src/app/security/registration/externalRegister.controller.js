(function () {
  'use strict';

  angular.module('skiptrace.security')
    .controller('ExternalRegisterController', ExternalRegisterController);

  ExternalRegisterController.inject = ['$scope', '$location', '$window', 'externalAuthSvc', 'activitySvc', 'logger', 'userSvc'];
    /* @ngInject */
  function ExternalRegisterController($scope, $location, $window, externalAuthSvc, activitySvc, logger, userSvc) {
    $scope.title = 'externalRegister';
    $scope.registration = {
      username: "",
      email: "",
      loginProvider: ""
    };
    $scope.register = register;

    activate();

    function activate() {
      activitySvc.busy("ExternalRegisterController");

      var info = externalAuthSvc.getRegistrationInfo();

      if (info) {
        $scope.registration.username = info.username;
        $scope.registration.email = info.email;
        $scope.registration.loginProvider = info.loginProvider;
        activitySvc.idle("ExternalRegisterController");
      } else {
        activitySvc.idle("ExternalRegisterController");
        logger.error("Something went wrong");
        $location.path("/register");
      }
    }

    function register() {
      userSvc.registerExternal($scope.registration).then(
        function (result) {
          logger.show("Registered successfully as " + userSvc.info.username);
          userSvc.signInExternal($scope.registration.loginProvider).then(
            function (result) {
              $window.location.href = result.data.url;
            },
            function (result) {
              //error
              logger.error("Something went wrong signing in. Error" + result.error);
            }
          );
        },
        function (result) {
          logger.error(result.error);
        });
    }
  }
})();