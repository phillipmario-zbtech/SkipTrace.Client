(function () {
  'use strict';

  angular
    .module('skiptrace.dashboard')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
        state: 'dashboard',
        config: {
          url: '/',
          templateUrl: 'app/dashboard/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'vm',

          resolve: {
            guardSvc: 'guardSvc',
            /* @ngInject */
            guard: function (guardSvc) {
              return guardSvc.guardRoute(['Users']);
            }
          },

          title: 'Dashboard',
          settings: {
            nav: 1,
            groups: ['Users'],
            content: '<i class="fa fa-dashboard"></i> Dashboard'
          }
        }
      },
      {
        state: 'about',
        config: {
          url: '/about',
          templateUrl: 'app/dashboard/about.html',
          controller: 'AboutController',
          controllerAs: 'vm',
          title: 'About'
        }
      },
      {
        state: 'settings',
        config: {
          url: '/settings',
          templateUrl: 'app/dashboard/settings.html',
          controller: 'SettingsController',
          controllerAs: 'vm',
          title: 'Settings'
        }
      },
      {
        state: 'help',
        config: {
          url: '/support',
          templateUrl: 'app/dashboard/support.html',
          controller: 'SupportController',
          controllerAs: 'vm',
          title: 'Help/Support'
        }
      }

    ];
  }
})();
