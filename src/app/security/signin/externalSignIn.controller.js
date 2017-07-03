(function () {
  'use strict';


  angular.module('skiptrace.security')
    .controller('ExternalSignInController', ExternalSignInController);

  ExternalSignInController.inject = ['$scope', '$window', 'accountClientSvc', 'logger', 'activitySvc'];
    /* @ngInject */
  function ExternalSignInController($scope, $window, accountClientSvc, logger, activitySvc) {
   
    $scope.title = "external auth providers";
    $scope.authProviders = undefined;
    $scope.login = login;

    activate();

    function activate() {
      getAuthProviders();
    }

    function login(url) {
      $window.location.href = url;
    }

    function getAuthProviders() {
      activitySvc.busy("ExternalSignInController");

      accountClientSvc.getExternalLogins("/externalauth/signin").then(
        function (result) {
          $scope.authProviders = result.data;
        },
        function (result) {
          logger.error("Error retrieving external logins");
        }
      )
        .finally(
        function () {
          activitySvc.idle("ExternalSignInController");
        });
    }
  }
})();
