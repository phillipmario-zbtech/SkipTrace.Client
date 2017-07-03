(function () {
  'use strict';

  angular.module('skiptrace.security')
    .controller('RegisterController', RegisterController);

  RegisterController.inject = ['$scope', '$location', 'logger', 'userSvc'];
    /* @ngInject */
  function RegisterController($scope, $location, logger, userSvc) { 
    $scope.title = 'Register';
    $scope.registration = {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    };
    $scope.register = register;
    $scope.checkUsernameAvailable = userSvc.checkUsernameAvailable;
    $scope.checkEmailAvailable = userSvc.checkEmailAvailable;

    function register() {
      userSvc.register($scope.registration)
        .then(
        function (result) {
          logger.show("Sucessfully registered");
          signIn();
        },
        function (result) {
          logger.error(result.error);
        });
    }

    function signIn() {
      logger.warnign("Signing in");
      var user = {
        id: $scope.registration.email,
        password: $scope.registration.password
      };

      userSvc.signIn(user)
        .then(
        function (result) {
          logger.show("Signed in as " + userSvc.info.username);
          $location.path("/");
        },
        function (result) {
          logger.error(result.error);
        });
    }
  }
})();
