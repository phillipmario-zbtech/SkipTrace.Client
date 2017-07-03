(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('PricingService', PricingService);

  PricingService.inject = ['config', '$rootScope', '$http', '$q', 'exception', 'logger', 'pricingResource'];
  /* @ngInject */
  function PricingService(config, $rootScope, $http, $q, exception, logger, pricingResource) {
     var service = { 
      calculateDebtCharges: calculateDebtCharges,
      calculateCollectionPaymentCharges:calculateCollectionPaymentCharges,
      calculateSalePaymentCharges:calculateSalePaymentCharges,
      calculateCollectionInvoiceCharges:calculateCollectionInvoiceCharges,
      calculateSaleInvoiceCharges:calculateSaleInvoiceCharges
    };

    return service;

    ////////////////
    function calculateDebtCharges(request) {
      return pricingResource
        .debt(request)
        .$promise;
    }

    function calculateCollectionPaymentCharges(request) {
      return pricingResource
        .collectionpayment(request)
        .$promise;
    }

    function calculateSalePaymentCharges(request) {
      return pricingResource
        .salepayment(request)
        .$promise;
    }


    function calculateCollectionInvoiceCharges(request) {
      return pricingResource
        .collectioninvoice(request)
        .$promise;
    }

    function calculateSaleInvoiceCharges(request) {
      return pricingResource
        .saleinvoice(request)
        .$promise;
    }
  }
})();