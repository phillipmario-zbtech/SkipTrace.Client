(function () {
  'use strict';

  angular
    .module('skiptrace.security')
    .run(appRun);

  appRun.$inject = ['routerHelper', 'externalAuthSvc', 'restoreUserSvc', 'statusSvc'];
  /* @ngInject */
  function appRun(routerHelper, externalAuthSvc, restoreUserSvc, statusSvc) {
    externalAuthSvc.handleAuthResponse().then(
      null,
      function () {
        return restoreUserSvc.restore();
      })
      .finally(
      function () {
        statusSvc.isReady(true);
      });
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'register',
        config: {
          url: '/register', 
          templateUrl: 'app/security/registration/register.html',
          controller: 'RegisterController'
        },
        caseInsensitiveMatch: true
      },
      {
        state: 'signIn',
        config: {
          url: '/signIn', 
          specialClass: 'splash-body',
          templateUrl: 'app/security/signin/signIn.html',
          controller: 'SignInController'
        },
        caseInsensitiveMatch: true
      },
      {
        state: 'manage',
        config: {
          url: '/manage',
          templateUrl: 'app/security/manage/manage.html',
          controller: 'ManageController',
          resolve: {
            guardSvc: 'guardSvc', /* @ngInject */
            guard: function (guardSvc) {
              return guardSvc.guardRoute();
            }
          }
        },
        caseInsensitiveMatch: true
      },
      {
        state: 'externalRegister',
        config: {
          url: '/externalregister',
          templateUrl: 'app/security/registration/externalRegister.html',
          controller: 'ExternalRegisterController',
          resolve: {
            statusSvc: 'statusSvc', /* @ngInject */
            appReady: function (statusSvc) {
              return statusSvc.whenReady();
            }
          }
        },
        caseInsensitiveMatch: true
      },
      {
        state: 'audit',
        config: {
          url: '/audit',
          templateUrl: 'app/security/audit/audit.html',
          controller: 'AuditController',
          controllerAs: 'vm',
          resolve: {
            statusSvc: 'statusSvc', /* @ngInject */
            appReady: function (statusSvc) {
              return statusSvc.whenReady();
            }
          }
        },
        caseInsensitiveMatch: true
      }

    ];
  }
})();
