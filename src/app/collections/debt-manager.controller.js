(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .controller('CollectionsDebtManagerController', CollectionsDebtManagerController);

  CollectionsDebtManagerController.$inject = ['debt', 'SettlementService', 'BillingService', 'LiabilityService'];
  /* @ngInject */
  function CollectionsDebtManagerController(debt, SettlementService, BillingService, LiabilityService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
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

    function activate() { 
    }

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
        .then(function (agreement) {})
        .catch(null)
        .finally(null);
    }

    function openInvoiceDialog() {
      return BillingService
        .openCollectionInvoiceDialog()
        .then(function (invoice) {})
        .catch(null)
        .finally(null);
    }
  }
})();
