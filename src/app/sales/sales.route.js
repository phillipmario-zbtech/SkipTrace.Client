(function () {
  'use strict';

  angular
    .module('skiptrace.sales')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
        state: 'sales',
        abstract: true,
        config: {
          url: '/sales',
          abstract: true,
          templateUrl: 'app/sales/sales.html',
          controller: 'SalesController',
          controllerAs: 'vm'

        }
      },
      {
        state: 'sales.dashboard',
        config: {
          url: '/',
          templateUrl: 'app/sales/sales-dashboard.html',
          controller: 'SalesDashboardController',
          controllerAs: 'vm',
          resolve: {
            guardSvc: 'guardSvc',
            /* @ngInject */
            guard: function (guardSvc) {
              return guardSvc.guardRoute(['Sales Users']);
            }
          },
          title: 'Sales',
          settings: {
            nav: 2,
            groups: ['Sales Users'],
            content: '<i class="fa fa-briefcase"></i> Sales'
          }
        }
      }, 
      //Viewers 
      {
        state: 'sales.agents',
        config: {
          url: '/agents/:id',
          templateUrl: 'app/sales/viewers/agent-viewer/agent-viewer.html',
          controller: 'SalesAgentViewerController',
          controllerAs: 'vm',
          resolve: {
            SubscriberService: 'SubscriberService',
            /* @ngInject */
            agent: function ($stateParams, SubscriberService) {
              return SubscriberService.getAgent($stateParams.id);
            }
          }
        }
      },
      {
        state: 'sales.members',
        config: {
          url: '/members/:id',
          templateUrl: 'app/sales/viewers/member-viewer/member-viewer.html',
          controller: 'SalesMemberViewerController',
          controllerAs: 'vm',
          resolve: {
            SubscriberService: 'SubscriberService',
            /* @ngInject */
            member: function ($stateParams, SubscriberService) {
              return SubscriberService.getMember($stateParams.id);
            }
          }
        }
      },
      {
        state: 'sales.statements',
        config: {
          url: '/statements/:id',
          templateUrl: 'app/sales/viewers/statement-viewer/statement-viewer.html',
          controller: 'SalesStatementViewerController',
          controllerAs: 'vm',
          resolve: {
            SubscriberService: 'SubscriberService',
            /* @ngInject */
            statement: function ($stateParams, SubscriberService) {
              return SubscriberService.getStatement($stateParams.id);
            }
          }
        }
      },



 




    ];
  }
})();
