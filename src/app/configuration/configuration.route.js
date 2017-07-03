(function () {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
        state: 'configuration',
        abstract: true,
        config: {
          url: '/configuration',
          abstract: true,
          templateUrl: 'app/configuration/configuration.html',
          controller: 'ConfigurationController',
          controllerAs: 'vm'

        }
      },
      {
        state: 'configuration.dashboard',
        config: {
          url: '/',
          templateUrl: 'app/configuration/configuration-dashboard.html',
          controller: 'ConfigurationDashboardController',
          controllerAs: 'vm',
          resolve: {
            guardSvc: 'guardSvc',
            /* @ngInject */
            guard: function (guardSvc) {
              return guardSvc.guardRoute([]);
            }
          },
          title: 'Configuration',
          settings: {
            nav: 6,
            groups: [],
            content: '<i class="fa fa-cogs"></i> Configuration'
          }
        }
      },
      {
        state: 'configuration.companies',
        config: {
          url: '/companies',
          templateUrl: 'app/configuration/company-manager/company-manager.html',
          controller: 'CompanyManagerController',
          controllerAs: 'vm'
        }
      },

      {
        state: 'configuration.products',
        config: {
          url: '/products',
          templateUrl: 'app/configuration/product-manager/product-manager.html',
          controller: 'ProductManagerController',
          controllerAs: 'vm',
          //resolve: {
          //  ConfigurationService: 'ConfigurationService',
          //  /* @ngInject */
          //  debt: function ($stateParams, LiabilConfigurationServiceityService) {
          //    return ConfigurationService.getDebt($stateParams.id);
          //  }
          //}
        }
      },

      {
        state: 'configuration.employees',
        config: {
          url: '/employees',
          templateUrl: 'app/configuration/employee-manager/employee-manager.html',
          controller: 'EmployeeManagerController',
          controllerAs: 'vm',
          //resolve: {
          //  ConfigurationService: 'ConfigurationService',
          //  /* @ngInject */
          //  debt: function ($stateParams, LiabilConfigurationServiceityService) {
          //    return ConfigurationService.getDebt($stateParams.id);
          //  }
          //}
        }
      }, {
        state: 'configuration.employees.details',
        config: {
          url: '/:id',
          templateUrl: 'app/configuration/employee-manager/employee-view.html',
          controller: 'EmployeeViewController',
          controllerAs: 'vm',
          resolve: {
            ConfigurationService: 'ConfigurationService',
            /* @ngInject */
            employee: function ($stateParams, ConfigurationService) {
              return ConfigurationService.getEmployee($stateParams.id);
            }
          }
        }
      },

    ];
  }
})();
