(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .directive('salePayment', salePayment);

  salePayment.$inject = ['lookupService'];

  function salePayment(lookupService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: SalePaymentController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/payments/sale-payment.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function SalePaymentController() {

  }
})();
