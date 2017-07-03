(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('SettlementService', SettlementService);

  SettlementService.inject = ['$uibModal', '$settings', '$rootScope', '$filter', '$q', 'exception', 'logger', 'alertService', 'Hub', 'storageSvc',
    'collectionPaymentResource', 'salePaymentResource', 'collectionInvoiceResource'
  ];
  /* @ngInject */
  function SettlementService($uibModal, $settings, $rootScope, $filter, $q, exception, alertService, logger, Hub, storageSvc,
    collectionPaymentResource, salePaymentResource, collectionInvoiceResource) {

    var baseUrl = $settings.settings.apiBaseUrl.value,
      //Hub Declaration-Start 
      huburl = baseUrl + '/signalr',
      hub = new Hub('settlement', {
        rootPath: huburl,
        logging: false,
        useSharedConnection: false,
        listeners: {
          'salePaymentCanceled': salePaymentCanceled,
          'collectionPaymentCanceled': collectionPaymentCanceled,
          'salePaymentPosted': salePaymentPosted,
          'collectionPaymentPosted': collectionPaymentPosted,
          'salePaymentVerified': salePaymentVerified,
          'collectionPaymentVerified': collectionPaymentVerified,
          'salePaymentCleared': salePaymentCleared,
          'collectionPaymentCleared': collectionPaymentCleared
        },
        methods: [
          'cancelSalePayment',
          'cancelCollectionPayment',
          'postSalePayment',
          'postCollectionPayment',
          'verifySalePayment',
          'verifyCollectionPayment',
          'clearSalePayment',
          'clearCollectionPayment'
        ],
        queryParams: {
          'access_token': storageSvc.retrieve("accessToken")
        },
        errorHandler: function (error) {
          alertService.add('danger', error);
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
            alertService.add('warning', 'connecting to settlement service')
          }
          if (stateNames[state.newState] == 'connected') {
            // service.connected = true;
            alertService.add('success', 'connected to settlement service')
          }
          if (stateNames[state.newState] == 'disconnected') {
            // service.connected = false;
            alertService.add('warning', 'disconnected from settlement service')
          }
          if (stateNames[state.newState] == 'reconnecting') {
            // service.connected = false;
            alertService.add('warning', 'reconnecting to settlement service')
          }
        }
      });
    //HUB Declaration-End 

    var service = {
      connected: false,
      setupQuery: setupQuery,
      search: search,
      queryFromParams: queryFromParams,
      submitCollectionPayment: submitCollectionPayment,
      submitSalePayment: submitSalePayment,
      //receipting
      nextReceiptNo: nextReceiptNo,
      //dialogs
      openSalePaymentDialog: openSalePaymentDialog,
      openCollectionPaymentDialog: openCollectionPaymentDialog,
      openCollectionInvoicePaymentDialog: openCollectionInvoicePaymentDialog,

      //sales
      payMemberInvoice: payMemberInvoice,
      cancelSalePayment: cancelSalePayment,
      clearSalePayment: clearSalePayment,
      verifySalePayment: verifySalePayment,
      postSalePayment: postSalePayment,

      unpostedSalePayments: [],
      getUnpostedSalePayments: getUnpostedSalePayments,
      unverifiedSalePayments: [],
      getUnverifiedSalePayments: getUnverifiedSalePayments,
      unclearedSalePayments: [],
      getUnclearedSalePayments: getUnclearedSalePayments,

      //collections
      cancelCollectionPayment: cancelCollectionPayment,
      clearCollectionPayment: clearCollectionPayment,
      verifyCollectionPayment: verifyCollectionPayment,
      postCollectionPayment: postCollectionPayment,

      unpostedCollectionPayments: [],
      getUnpostedCollectionPayments: getUnpostedCollectionPayments,
      unverifiedCollectionPayments: [],
      getUnverifiedCollectionPayments: getUnverifiedCollectionPayments,
      unclearedCollectionPayments: [],
      getUnclearedCollectionPayments: getUnclearedCollectionPayments

    };
    return service;

    //////////////// 

    function setupQuery(selectableFilters) {
      return collectionPaymentResource
        .queryOptions(selectableFilters)
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
      return $q.when(query);
    }

    function submitCollectionPayment(payment) {
      //submit payment 
      return $q.when(payment);
    }

    function submitSalePayment(payment) {
      return $q.when(payment);
    }
    //receipting
    function nextReceiptNo() {
      return 1234;
    }

    //*********payment dialogs***********/
    function openCollectionPaymentDialog(debtId) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/settlement/collection-payment-dialog.html',
        controller: 'CollectionPaymentDialogController',
        controllerAs: 'vm',
        size: 'lg',
        resolve: {
          LiabilityService: 'LiabilityService',
          /* @ngInject */
          debt: function (LiabilityService) {
            return LiabilityService.getDebt(debtId);
          }
        }
      });
      return modalInstance.result.then(function (payment) {}, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }

    function openSalePaymentDialog(invoice) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/settlement/sale-payment-dialog.html',
        controller: 'SalePaymentDialogController',
        controllerAs: 'vm',
        size: 'lg',
        resolve: {
          BillingService: 'BillingService',
          /* @ngInject */
          invoice: function (BillingService) {
            return BillingService.getSaleInvoice(invoice.id);
          }
        }
      });
      return modalInstance.result.then(function (payment) {}, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }

    function openCollectionInvoicePaymentDialog(member) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/settlement/collection-invoice-payment-dialog.html',
        controller: 'CollectionInvoicePaymentDialogController',
        controllerAs: 'vm',
        size: 'lg',
        resolve: {
          SubscriberService: 'SubscriberService',
          BillingService: 'BillingService',
          /* @ngInject */
          member: function (SubscriberService) {
            return SubscriberService.getMember(member.id);
          },
          /* @ngInject */
          invoices: function (BillingService) {
            return BillingService.getMemberCollectionInvoices(member.id);
          }
        }
      });
      return modalInstance.result.then(function (payment) {}, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }
    /************payment dialogs*****************/
    //SALES

    //unposted
    function getUnpostedSalePayments() {
      return $q.when(salePaymentResource
        .unposted().$promise
        .then(function (data) {
          service.unpostedSalePayments = data;
        })
        .catch()
        .finally()
      );
    }

    function postSalePayment(payment) {
      hub.connect().then(function () {
        hub.postSalePayment(payment.id);
      });
      return $q.when(payment);
    }

    function salePaymentPosted(payment) {
      var i = $filter('filter')(service.unpostedSalePayments, {
        id: payment.id
      })[0];
      var index = service.unpostedSalePayments.indexOf(i);
      service.unpostedSalePayments.splice(index, 1);
      $rootScope.$apply();
    }

    //unverified
    function getUnverifiedSalePayments() {
      return $q.when(salePaymentResource
        .unverified().$promise
        .then(function (data) {
          service.unverifiedSalePayments = data;
        })
        .catch()
        .finally()
      );
    }

    function verifySalePayment(payment) {
      hub.connect().then(function () {
        hub.verifySalePayment(payment.id);
      });
      return $q.when(payment);
    }

    function salePaymentVerified(payment) {
      var i = $filter('filter')(service.unverifiedSalePayments, {
        id: payment.id
      })[0];
      var index = service.unverifiedSalePayments.indexOf(i);
      service.unverifiedSalePayments.splice(index, 1);
      $rootScope.$apply();
    }
    //uncleared  
    function getUnclearedSalePayments() {
      return $q.when(salePaymentResource
        .uncleared().$promise
        .then(function (data) {
          service.unclearedSalePayments = data;
        })
        .catch()
        .finally()
      );
    }

    function clearSalePayment(payment) {
      hub.connect().then(function () {
        hub.clearSalePayment(payment.id);
      });
      return $q.when(payment);
    }

    function salePaymentCleared(payment) {
      var i = $filter('filter')(service.unclearedSalePayments, {
        id: payment.id
      })[0];
      var index = service.unclearedSalePayments.indexOf(i);
      service.unclearedSalePayments.splice(index, 1);
      $rootScope.$apply();
    }
    //Cancel

    function cancelSalePayment(payment) {
      hub.connect().then(function () {
        hub.cancelSalePayment(payment.id);
      });
      return $q.when(payment);
    }

    function salePaymentCanceled(payment) {
      var i = -1;
      var index = -1;
      i = $filter('filter')(service.unpostedSalePayments, {
        id: payment.id
      })[0];
      index = service.unpostedSalePayments.indexOf(i);
      service.unpostedSalePayments.splice(index, 1);

      i = $filter('filter')(service.unverifiedSalePayments, {
        id: payment.id
      })[0];
      index = service.unverifiedSalePayments.indexOf(i);
      service.unverifiedSalePayments.splice(index, 1);

      i = $filter('filter')(service.unclearedSalePayments, {
        id: payment.id
      })[0];
      index = service.unclearedSalePayments.indexOf(i);
      service.unclearedSalePayments.splice(index, 1);

      $rootScope.$apply();
    }




    //COLLECTION   

    //unposted
    function getUnpostedCollectionPayments() {
      return $q.when(collectionPaymentResource
        .unposted().$promise
        .then(function (data) {
          service.unpostedCollectionPayments = data;
        })
        .catch()
        .finally()
      );
    }

    function postCollectionPayment(payment) {
      hub.connect().then(function () {
        hub.postCollectionPayment(payment.id);
      });
      return $q.when(payment);
    }

    function collectionPaymentPosted(payment) {
      var i = $filter('filter')(service.unpostedCollectionPayments, {
        id: payment.id
      })[0];
      var index = service.unpostedCollectionPayments.indexOf(i);
      service.unpostedCollectionPayments.splice(index, 1);
      $rootScope.$apply();
    }
    //unverified
    function getUnverifiedCollectionPayments() {
      return $q.when(collectionPaymentResource
        .unverified().$promise
        .then(function (data) {
          service.unverifiedCollectionPayments = data;
        })
        .catch()
        .finally()
      );
    }

    function verifyCollectionPayment(payment) {
      hub.connect().then(function () {
        hub.verifyCollectionPayment(payment.id);
      });
      return $q.when(payment);
    }

    function collectionPaymentVerified(payment) {
      var i = $filter('filter')(service.unverifiedCollectionPayments, {
        id: payment.id
      })[0];
      var index = service.unverifiedCollectionPayments.indexOf(i);
      service.unverifiedCollectionPayments.splice(index, 1);
      $rootScope.$apply();
    }
    //uncleared  
    function getUnclearedCollectionPayments() {
      return $q.when(collectionPaymentResource
        .uncleared().$promise
        .then(function (data) {
          service.unclearedCollectionPayments = data;
        })
        .catch()
        .finally()
      );
    }

    function clearCollectionPayment(payment) {
      hub.connect().then(function () {
        hub.clearCollectionPayment(payment.id);
      });
      return $q.when(payment);
    }

    function collectionPaymentCleared(payment) {
      var i = $filter('filter')(service.unclearedCollectionPayments, {
        id: payment.id
      })[0];
      var index = service.unclearedCollectionPayments.indexOf(i);
      service.unclearedCollectionPayments.splice(index, 1);
      $rootScope.$apply();
    }


    //canceled
    function cancelCollectionPayment(payment) {
      hub.connect().then(function () {
        hub.cancelCollectionPayment(payment.id);
      });
      return $q.when(payment);
    }

    function collectionPaymentCanceled(payment) {
      var i = -1;
      var index = -1;
      i = $filter('filter')(service.unpostedCollectionPayments, {
        id: payment.id
      })[0];
      index = service.unpostedCollectionPayments.indexOf(i);
      service.unpostedCollectionPayments.splice(index, 1);

      i = $filter('filter')(service.unverifiedCollectionPayments, {
        id: payment.id
      })[0];
      index = service.unverifiedCollectionPayments.indexOf(i);
      service.unverifiedCollectionPayments.splice(index, 1);

      i = $filter('filter')(service.unclearedCollectionPayments, {
        id: payment.id
      })[0];
      index = service.unclearedCollectionPayments.indexOf(i);
      service.unclearedCollectionPayments.splice(index, 1);

      $rootScope.$apply();
    }







    //invocie sales 
    function payMemberInvoice(payment) {
      return $q.when(payment);
    }

    function cancelSalePayment(payment) {
      hub.connect().then(function () {
        hub.cancelSalePayment(payment.id);
      });
      return $q.when(payment);
    }

    function salePaymentCanceled() {

      $rootScope.$apply();
    }


  }
})();
