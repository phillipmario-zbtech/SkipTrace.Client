(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('collectionInvoiceSummaryView', collectionInvoiceSummaryView);

  collectionInvoiceSummaryView.$inject = ['BillingService'];

  function collectionInvoiceSummaryView() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        invoice: '='
      },
      controller: CollectionInvoiceSummaryViewController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/financials-manager/collection-invoice-summary-view/collection-invoice-summary-view.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function CollectionInvoiceSummaryViewController(BillingService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.invoiceView = {
      templateUrl: 'collectionInvoicePopoverSummary.html',
      title: 'Invoice Summary'
    };
  }
})();
