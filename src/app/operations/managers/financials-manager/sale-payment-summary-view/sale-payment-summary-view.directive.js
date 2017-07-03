(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('salePaymentSummaryView', salePaymentSummaryView);

  salePaymentSummaryView.$inject = ['SettlementService'];

  function salePaymentSummaryView() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        payment: '='
      },
      controller: SalePaymentSummaryViewController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/financials-manager/sale-payment-summary-view/sale-payment-summary-view.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function SalePaymentSummaryViewController(SettlementService) {
    var vm = this;
    vm.paymentView = {
      templateUrl: 'salePaymentPopoverSummary.html',
      title: 'Payment Summary'
    };
  }
})();
