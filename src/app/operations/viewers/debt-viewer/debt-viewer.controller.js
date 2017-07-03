(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .controller('OperationsDebtViewerController', OperationsDebtViewerController);

  OperationsDebtViewerController.$inject = ['debt', 'SettlementService', 'BillingService', 'LiabilityService'];
  /* @ngInject */
  function OperationsDebtViewerController(debt, SettlementService, BillingService, LiabilityService) {
    var vm = this;
    vm.banner = {
      title: debt.debtorName,
      content: debt.status
    };

    vm.debt = debt;
    vm.openPaymentDialog = openPaymentDialog;
    vm.openInvoiceDialog = openInvoiceDialog;
    vm.openAgreementDialog = openAgreementDialog;

    activate();

    ////////////////

    function activate() {}

    function openPaymentDialog() {
      return SettlementService
        .openCollectionPaymentDialog()
        .then(function (payment) { 
        })
        .catch(null)
        .finally(null);
    }

    function openAgreementDialog() {
      return LiabilityService
        .openAgreementDialog()
        .then(function (agreement) { 
        })
        .catch(null)
        .finally(null);
    }

    function openInvoiceDialog() {
      return BillingService
        .openCollectionInvoiceDialog()
        .then(function (invoice) { 
        })
        .catch(null)
        .finally(null);
    }
  }
})();
