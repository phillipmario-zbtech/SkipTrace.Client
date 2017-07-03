(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .controller('CollectionsDebtViewerController', CollectionsDebtViewerController);

  CollectionsDebtViewerController.$inject = ['debt', 'SettlementService', 'BillingService', 'LiabilityService'];
  /* @ngInject */
  function CollectionsDebtViewerController(debt, SettlementService, BillingService, LiabilityService) {
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
        .openCollectionPaymentDialog(vm.debt.id)
        .then(function (payment) { 
        })
        .catch(null)
        .finally(null);
    }

    function openAgreementDialog() {
      return LiabilityService
        .openAgreementDialog(vm.debt.id)
        .then(function (agreement) { 
        })
        .catch(null)
        .finally(null);
    }

    function openInvoiceDialog() {
      return BillingService
        .openCollectionInvoiceDialog(vm.debt.id)
        .then(function (invoice) { 
        })
        .catch(null)
        .finally(null);
    }
  }
})();
