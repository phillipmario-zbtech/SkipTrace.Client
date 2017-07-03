(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('BillingService', BillingService);

  BillingService.inject = ['$uibModal', '$settings', '$rootScope', '$http', '$q', 'exception', 'logger', 'alertService', 'Hub', 'storageSvc',
    'memberResource', 'processingResource', 'saleInvoiceResource', 'collectionInvoiceReasource', 'chequeResource'
  ];
  /* @ngInject */
  function BillingService($uibModal, $settings, $rootScope, $http, $q, exception, logger, alertService, Hub, storageSvc,
    memberResource, processingResource, saleInvoiceResource, collectionInvoiceResource, chequeResource
  ) {
    var baseUrl = $settings.settings.apiBaseUrl.value,

      cheques = [],
      statements = [],
      outstandingSaleInvoices = [],
      outstandingCollectionInvoices = [],
      //Hub Declaration-Start 
      huburl = baseUrl + '/signalr',
      hub = new Hub('billing', {
        rootPath: huburl,
        logging: false,
        useSharedConnection: false,
        listeners: {
          'transaction': function (i) {
            //service.transactions.push(i);
            $rootScope.$apply();
          },
          'serverTime': function (i) {
            service.serverTime = i;
            $rootScope.$apply();
          }
        },
        methods: ['getServerTime'],
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
            alertService.add('warning', 'connecting to billing service')
          }
          if (stateNames[state.newState] == 'connected') {
            // service.connected = true;
            alertService.add('success', 'connected to billing service')
          }
          if (stateNames[state.newState] == 'disconnected') {
            // service.connected = false;
            alertService.add('warning', 'disconnected from billing service')
          }
          if (stateNames[state.newState] == 'reconnecting') {
            // service.connected = false;
            alertService.add('warning', 'reconnecting to billing service')
          }
        }
      });
    //HUB Declaration-End 

    var service = {
      transactions: [],
      serverTime: '',
      connected: false,
      getProcessingDates: getProcessingDates,
      setupProcessingQuery: setupProcessingQuery,
      search: search,
      queryFromParams: queryFromParams,


      getMemberCollectionInvoices: getMemberCollectionInvoices,
      openCollectionInvoiceDialog: openCollectionInvoiceDialog,
      getCollectionInvoice: getCollectionInvoice,
      submitCollectionInvoice: submitCollectionInvoice,
      cancelCollectionInvoice: cancelCollectionInvoice,
      getOutstandingCollectionInvoices: getOutstandingCollectionInvoices,

      openSaleInvoiceDialog: openSaleInvoiceDialog,
      getSaleInvoice: getSaleInvoice,
      submitSaleInvoice: submitSaleInvoice,
      cancelSaleInvoice: cancelSaleInvoice,
      getOutstandingSaleInvoices: getOutstandingSaleInvoices,


      getCheques: getCheques,
      getStatements: getStatements,


    };
    return service;

    ////////////////  


    function getProcessingDates(date) {
      return processingResource
        .processingDates()
        .$promise;
    }

    function setupProcessingQuery(processingFilters) {
      return processingResource
        .processingOptions(processingFilters)
        .$promise;
    }

    //populate the query with any route params making sure check if the property is an array or single value
    function queryFromParams(query, routeParams) {
      for (var property in query) {
        if (routeParams[property]) {
          if (angular.isArray(query[property])) {
            if (angular.isArray(routeParams[property])) {
              query[property] = routeParams[property];
            } else {
              query[property].push(routeParams[property]);
            }
          } else {
            query[property] = routeParams[property];
          }
        }
      }
    }

    function search(query) {
      return processingResource
        .search(query)
        .$promise;
    }

    //Collections
    function getMemberCollectionInvoices(member) {
      return collectionInvoiceResource
        .memberoutstanding({
          id: member.id
        }).$promise;
    }

    function getCollectionInvoice(id) {
      return collectionInvoiceResource.get({
        id: id
      }).$promise;
    }

    function submitCollectionInvoice(invoice) {
      return $q.when(invoice);
    }

    function submitCollectionInvoice(invoice) {
      return $q.when(invoice);
    }

    function cancelCollectionInvoice(invoice) {
      return $q.when(invoice);
    }

    function openCollectionInvoiceDialog(debt) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/billing/collection-invoice-dialog.html',
        controller: 'CollectionInvoiceDialogController',
        controllerAs: 'vm',
        size: 'lg',
        resolve: {
          LiabilityService: 'LiabilityService',
          /* @ngInject */
          debt: function (LiabilityService) {
            return LiabilityService.getDebt(debt.id);
          }
        }
      });
      return modalInstance.result.then(function (invoice) {

      }, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }


    function getOutstandingCollectionInvoices() {
      return collectionInvoiceResource
        .outstanding()
        .$promise;
    }


    //Sales

    function getSaleInvoice(id) {
      return saleInvoiceResource.get({
        id: id
      }).$promise;
    }

    function submitSaleInvoice(invoice) {
      return $q.when(invoice);
    }

    function submitSaleInvoice(invoice) {
      return $q.when(invoice);
    }

    function cancelSaleInvoice(invoice) {
      return $q.when(invoice);
    }

    function openSaleInvoiceDialog(subscription) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/billing/sale-invoice-dialog.html',
        controller: 'SaleInvoiceDialogController',
        controllerAs: 'vm',
        size: 'lg',
        resolve: {
          SubscriberService: 'SubscriberService',
          /* @ngInject */
          subscription: function (SubscriberService) {
            return SubscriberService.getSubscription(subscription.id);
          }
        }
      });
      return modalInstance.result.then(function (invoice) {}, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }

    function getOutstandingSaleInvoices() {
      return saleInvoiceResource
        .outstanding()
        .$promise;
    }















    function getCheques() {

    }

    function getStatements() {

    }




  }
})();
