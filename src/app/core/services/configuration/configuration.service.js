(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('ConfigurationService', ConfigurationService);

  ConfigurationService.inject = ['$uibModal', '$state', '$settings', '$rootScope', '$http', '$q', 'exception', 'logger', 'alertService', 'Hub', 'storageSvc',
    'companyResource', 'employeeResource', 'productResource', 'reasonResource', 'zoneResource', 'telephonecollectorResource', 'fieldcollectorResource', 'legalcollectorResource'
  ];
  /* @ngInject */
  function ConfigurationService($uibModal, $state, $settings, $rootScope, $http, $q, exception, logger, alertService, Hub, storageSvc,
    companyResource, employeeResource, productResource, reasonResource, zoneResource, telephonecollectorResource, fieldcollectorResource, legalcollectorResource
  ) {
    var baseUrl = $settings.settings.apiBaseUrl.value,
      //Hub Declaration-Start 
      huburl = baseUrl + '/signalr',
      hub = new Hub('configuration', {
        rootPath: huburl,
        logging: false,
        useSharedConnection: false,
        listeners: {},
        methods: [],
        queryParams: {
          'access_token': storageSvc.retrieve("accessToken")
        },
        errorHandler: function (error) {
          logger.log(error);
        },
        stateChanged: function (state) {
          var stateNames = {
            0: 'connecting',
            1: 'connected',
            2: 'reconnecting',
            4: 'disconnected'
          };
          if (stateNames[state.newState] == 'connecting') {
            // service.connected = false;
            alertService.add('warning', 'connecting to configuration service')
          }
          if (stateNames[state.newState] == 'connected') {
            // service.connected = true;
            alertService.add('success', 'connected to configuration service')
          }
          if (stateNames[state.newState] == 'disconnected') {
            // service.connected = false;
            alertService.add('warning', 'disconnected from configuration service')
          }
          if (stateNames[state.newState] == 'reconnecting') {
            // service.connected = false;
            alertService.add('warning', 'reconnecting to configuration service')
          }
        }
      });
    //HUB Declaration-End 

    var service = {
      //Company Set Up
      openCompanyDialog: openCompanyDialog,
      initializeFolders: initializeFolders,
      getCompany: getCompany,
      getCompanies: getCompanies,

      //employees

      openProductDialog: openProductDialog,
      getProduct: getProduct,
      getProducts: getProducts,


      //Employee
      openEmployeeDialog: openEmployeeDialog,
      getEmployee: getEmployee,
      getEmployees: getEmployees,

      //Collectors 
      getTelephoneCollector: getTelephoneCollector,
      getFieldCollector: getFieldCollector,
      getLegalCollector: getLegalCollector,

      openZoneDialog: openZoneDialog,
      getZone: getZone,
      getZones: getZones,

      openReasonDialog: openReasonDialog,
      getReason: getReason,
      getReasons: getReasons,
    };

    return service;

    ////////////////  

    //company
    function openCompanyDialog() {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/configuration/company-dialog.html',
        controller: 'CompanyDialogController',
        controllerAs: 'vm',
        size: 'lg'
      });
      return modalInstance.result.then(function (company) {  
        $state.go("configuration.companies");
      });
    }

    function initializeFolders() {
      return companyResource.initializeFolders.$promise;
    }

    function getCompany(id) {
      return companyResource.get({
        id: id
      }).$promise;
    }

    function getCompanies() {
      return companyResource.query().$promise;
    }
    //employees
    function openEmployeeDialog() {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/configuration/employee-dialog.html',
        controller: 'EmployeeDialogController',
        controllerAs: 'vm',
        size: 'lg'
      });
      return modalInstance.result.then(function (invoice) {}, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }

    function getEmployees() {
      return employeeResource.query(function (data) {
        return $q.when(data);
      });
    }

    function getEmployee(id) {
      return employeeResource.get({
        id: id
      }).$promise;
    }

    function getTelephoneCollector(id) {
      return telephoneCollectorResource.get({
        id: id
      }).$promise;
    }

    function getFieldCollector(id) {
      return fieldCollectorResource.get({
        id: id
      }).$promise;
    }

    function getLegalCollector(id) {
      return legalCollectorResource.get({
        id: id
      }).$promise;
    }

    //products  
    function openProductDialog() {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/configuration/product-dialog.html',
        controller: 'ProductDialogController',
        controllerAs: 'vm',
        size: 'lg'
      });
      return modalInstance.result.then(function (invoice) {}, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }

    function getProduct(id) {
      return productResource.get(id).$promise;
    }

    function getProducts() {
      return productResource.$query;
    }
    //zones
    function openZoneDialog() {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/configuration/zone-dialog.html',
        controller: 'ZoneDialogController',
        controllerAs: 'vm',
        size: 'lg'
      });
      return modalInstance.result.then(function (invoice) {}, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }

    function getZone(id) {
      return zoneResource.get({
        id: id
      }).$promise;
    }

    function getZones() {
      return zoneResource.$query;
    }
    //reasons
    function openReasonDialog() {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/configuration/reason-dialog.html',
        controller: 'ReasonDialogController',
        controllerAs: 'vm',
        size: 'lg'
      });
      return modalInstance.result.then(function (invoice) {}, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }

    function getReason(id) {
      return reasonResource.get({
        id: id
      }).$promise;
    }

    function getReasons() {
      return reasonResource.$query;
    }







  }
})();
