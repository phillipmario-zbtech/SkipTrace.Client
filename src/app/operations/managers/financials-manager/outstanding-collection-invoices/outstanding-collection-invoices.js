(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('outstandingCollectionInvoicesViewer', outstandingCollectionInvoicesViewer);

  outstandingCollectionInvoicesViewer.$inject = ['BillingService', 'SettlementService', '$q', 'logger'];

  function outstandingCollectionInvoicesViewer() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: OutstandingCollectionInvoicesController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/financials-manager/outstanding-collection-invoices/outstanding-collection-invoices.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function OutstandingCollectionInvoicesController(BillingService, SettlementService, $q, logger) {
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
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };

    vm.invoices = BillingService.outstandingCollectionInvoices;

    activate();

    function activate() {
      var promises = [getInvoices()];
      $q.all(promises)
        .then(function () {
          logger.log('Loaded Outstanding Collection Invoices');
        });
    }

    function getInvoices() {
      BillingService.getOutstandingCollectionInvoices()
        .then(function () {
          vm.invoices = BillingService.outstandingCollectionInvoices;
        })
        .catch(null)
        .finally(null);
    }
  }
})();
