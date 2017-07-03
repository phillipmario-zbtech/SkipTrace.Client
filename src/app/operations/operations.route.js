(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
        state: 'operations',
        abstract: true,
        config: {
          url: '/operations',
          abstract: true,
          templateUrl: 'app/operations/operations.html',
          controller: 'OperationsController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'operations.dashboard',
        config: {
          url: '/',
          templateUrl: 'app/operations/operations-dashboard.html',
          controller: 'OperationsDashboardController',
          controllerAs: 'vm',
          resolve: {
            guardSvc: 'guardSvc',
            /* @ngInject */
            guard: function (guardSvc) {
              return guardSvc.guardRoute(['Operations Users']);
            }
          },
          title: 'Operations',
          settings: {
            nav: 3,
            groups: ['Operations Users'],
            content: '<i class="fa fa-cubes"></i> Operations'
          }
        }
      },
  
      //Viewers
      {
        state: 'operations.debts',
        config: {
          url: '/debts/:id',
          templateUrl: 'app/operations/viewers/debt-viewer/debt-viewer.html',
          controller: 'OperationsDebtViewerController',
          controllerAs: 'vm',
          resolve: {
            LiabilityService: 'LiabilityService',
            /* @ngInject */
            debt: function ($stateParams, LiabilityService) {
              return LiabilityService.getDebt($stateParams.id);
            }
          }
        }
      },
      {
        state: 'operations.debtors',
        config: {
          url: '/debtors/:id',
          templateUrl: 'app/operations/viewers/debtor-viewer/debtor-viewer.html',
          controller: 'OperationsDebtorViewerController',
          controllerAs: 'vm',
          resolve: {
            LiabilityService: 'LiabilityService',
            /* @ngInject */
            debtor: function ($stateParams, LiabilityService) {
              return LiabilityService.getDebtor($stateParams.id);
            }
          }
        }
      },
      {
        state: 'operations.collectors',
        config: {
          url: '/collectors/:id',
          templateUrl: 'app/operations/viewers/collector-viewer/collector-viewer.html',
          controller: 'OperationsCollectorViewerController',
          controllerAs: 'vm',
          resolve: {
            LiabilityService: 'LiabilityService',
            /* @ngInject */
            collector: function ($stateParams, LiabilityService) {
              return LiabilityService.getCollector($stateParams.id);
            }
          }
        }
      },
      {
        state: 'operations.agents',
        config: {
          url: '/agents/:id',
          templateUrl: 'app/operations/viewers/agent-viewer/agent-viewer.html',
          controller: 'OperationsAgentViewerController',
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
        state: 'operations.members',
        config: {
          url: '/members/:id',
          templateUrl: 'app/operations/viewers/member-viewer/member-viewer.html',
          controller: 'OperationsMemberViewerController',
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
        state: 'operations.statements',
        config: {
          url: '/statements/:id',
          templateUrl: 'app/operations/viewers/statement-viewer/statement-viewer.html',
          controller: 'OperationsStatementViewerController',
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









      {
        state: 'operations.telephonecollectors',
        config: {
          url: '/collectors/:id',
          templateUrl: 'app/operations/collector-manager.html',
          controller: 'OperationsCollectorManagerController',
          controllerAs: 'vm',
          resolve: {
            ConfigurationService: 'ConfigurationService',
            /* @ngInject */
            collector: function ($stateParams, ConfigurationService) {
              return ConfigurationService.getTelephoneCollector($stateParams.id);
            }
          }

        }
      },
      {
        state: 'operations.fieldcollectors',
        config: {
          url: '/collectors/:id',
          templateUrl: 'app/operations/collector-manager.html',
          controller: 'OperationsCollectorManagerController',
          controllerAs: 'vm',
          resolve: {
            ConfigurationService: 'ConfigurationService',
            /* @ngInject */
            collector: function ($stateParams, ConfigurationService) {
              return ConfigurationService.getFieldCollector($stateParams.id);
            }
          }
        }
      },
      {
        state: 'operations.legalcollectors',
        config: {
          url: '/lcollectors/:id',
          templateUrl: 'app/operations/collector-manager.html',
          controller: 'OperationsCollectorManagerController',
          controllerAs: 'vm',
          resolve: {
            ConfigurationService: 'ConfigurationService',
            /* @ngInject */
            collector: function ($stateParams, ConfigurationService) {
              return ConfigurationService.getLegalCollector($stateParams.id);
            }
          }
        }
      }


    ];
  }
})();
