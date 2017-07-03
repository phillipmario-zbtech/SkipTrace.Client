(function () {
  'use strict';

  angular.module('skiptrace.security')
    .controller('SignInController', SignInController);

  SignInController.inject = ['$scope', '$state', 'userSvc', 'logger'];
    /* @ngInject */
  function SignInController($scope, $state, userSvc, logger) {
    $scope.title = 'Sign into SkipTrace';
    $scope.user = {
      id: "",
      password: ""
    };
    $scope.signIn = signIn;
    $scope.result = "";
    $scope.remember = false;

    activate();

    function activate() {

    }
    function signIn() {
      userSvc.signIn($scope.user, $scope.remember)
        .then(function (result) {  
          logger.info("signed in as " + userSvc.info.username);  
           $state.go('dashboard');
        })
        .catch(function (result) { 
          //TODO: set focus back here
          $scope.user.id = "";
          $scope.user.password = ""; 
        })
    }
  }
})();
