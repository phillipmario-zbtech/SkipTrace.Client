(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
        state: 'collections',
        abstract: true,
        config: {
          url: '/collections',
          abstract: true,
          templateUrl: 'app/collections/collections.html',
          controller: 'CollectionsController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'collections.dashboard',
        config: {
          url: '/',
          templateUrl: 'app/collections/collections-dashboard.html',
          controller: 'CollectionsDashboardController',
          controllerAs: 'vm',
          resolve: {
            guardSvc: 'guardSvc',
            /* @ngInject */
            guard: function (guardSvc) {
              return guardSvc.guardRoute(['Collections Users', 'Legal Users']);
            }
          },
          title: 'Collections',
          settings: {
            nav: 4,
            groups: ['Collections Users', 'Legal Users'],
            content: '<i class="fa fa-credit-card"></i> Collections'
          }
        }
      },
      //Viewers
      {
        state: 'collections.debts',
        config: {
          url: '/debts/:id',
          templateUrl: 'app/collections/viewers/debt-viewer/debt-viewer.html',
          controller: 'CollectionsDebtViewerController',
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
        state: 'collections.debtors',
        config: {
          url: '/debtors/:id',
          templateUrl: 'app/collections/viewers/debtor-viewer/debtor-viewer.html',
          controller: 'CollectionsDebtorViewerController',
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
        state: 'collections.collectors',
        config: {
          url: '/collectors/:id',
          templateUrl: 'app/collections/viewers/collector-viewer/collector-viewer.html',
          controller: 'CollectionsCollectorViewerController',
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


      //Managers

      {
        state: 'collections.telephonecollectors',
        config: {
          url: '/collectors/:id',
          templateUrl: 'app/collections/collector-manager.html',
          controller: 'CollectionsCollectorManagerController',
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
        state: 'collections.fieldcollectors',
        config: {
          url: '/collectors/:id',
          templateUrl: 'app/collections/collector-manager.html',
          controller: 'CollectionsCollectorManagerController',
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
        state: 'collections.legalcollectors',
        config: {
          url: '/lcollectors/:id',
          templateUrl: 'app/collections/collector-manager.html',
          controller: 'CollectionsCollectorManagerController',
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
