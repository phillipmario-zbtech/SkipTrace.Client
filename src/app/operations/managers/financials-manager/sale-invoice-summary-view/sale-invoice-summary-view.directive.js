(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('saleInvoiceSummaryView', saleInvoiceSummaryView);

  saleInvoiceSummaryView.$inject = ['BillingService'];

  function saleInvoiceSummaryView() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        invoice: '='
      },
      controller: SaleInvoiceSummaryViewController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/financials-manager/sale-invoice-summary-view/sale-invoice-summary-view.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function SaleInvoiceSummaryViewController(BillingService) {
    var vm = this;
    vm.invoiceView = {
      templateUrl: 'saleInvoicePopoverSummary.html',
      title: 'Invoice Summary'
    };
  }
})();
