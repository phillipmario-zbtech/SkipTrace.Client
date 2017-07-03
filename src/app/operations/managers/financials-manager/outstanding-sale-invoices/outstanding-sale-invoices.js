(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('outstandingSaleInvoicesViewer', outstandingSaleInvoicesViewer);

  outstandingSaleInvoicesViewer.$inject = ['BillingService', 'SettlementService', '$q', 'logger'];

  function outstandingSaleInvoicesViewer(BillingService, SettlementService, $q, logger) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: OutstandingSaleInvoicesController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/financials-manager/outstanding-sale-invoices/outstanding-sale-invoices.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function OutstandingSaleInvoicesController(BillingService, SettlementService, $q, logger) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.invoiceView = {
      templateUrl: 'saleInvoicePopoverSummary.html',
      title: 'Invoice Summary'
    };
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.paySaleInvoice = paySaleInvoice;
    vm.cancelSaleInvoice = cancelSaleInvoice;

    vm.invoices = BillingService.outstandingSaleInvoices;

    activate();

    function activate() {
      var promises = [getInvoices()];
      $q.all(promises)
        .then(function () {
          logger.log('Loaded Outstanding Sale Invoices');
        });
    }

    function getInvoices() {
      BillingService.getOutstandingSaleInvoices()
        .then(function (data) {
          vm.invoices = data; 
        })
        .catch(null)
        .finally(null);
    }

    function paySaleInvoice(invoice) {
      return SettlementService.openSalePaymentDialog(invoice)
        .then(function (data) {})
        .catch()
        .finally();
    }

    function cancelSaleInvoice(invoice) {
      return BillingService.cancelSaleInvoice(invoice)
        .then(function (data) {})
        .catch()
        .finally();
    }

  }
})();
