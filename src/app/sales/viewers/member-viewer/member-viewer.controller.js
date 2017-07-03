(function () {
  'use strict';

  angular
    .module('skiptrace.sales')
    .controller('SalesMemberViewerController', SalesMemberViewerController);

  SalesMemberViewerController.$inject = ['member', 'SettlementService', 'BillingService', 'LiabilityService'];
  /* @ngInject */
  function SalesMemberViewerController(member, SettlementService, BillingService, LiabilityService) {
    var vm = this;
    vm.banner = {
      title: member.memberName,
      content: member.status
    };

    vm.member = member;
    vm.openCollectionInvoicePaymentDialog = openCollectionInvoicePaymentDialog;
    vm.newDebt = newDebt;
 
    vm.openPaymentDialog = openPaymentDialog;
    vm.openInvoiceDialog = openInvoiceDialog;
    vm.openAgreementDialog = openAgreementDialog; 
    
    activate();

    ////////////////

    function activate() {}

    function newDebt() {
      return LiabilityService.openLiabilityDialog(member.id)
        .then(function () { 
        })
        .catch(null)
        .finally(null);
    } 
    function openCollectionInvoicePaymentDialog() { 
      return SettlementService
        .openCollectionInvoicePaymentDialog(member.id)
        .then(function (payment) {})
        .catch(null)
        .finally(null);
    }

    function openPaymentDialog() {
      return SettlementService
        .openOperationPaymentDialog()
        .then(function (payment) {})
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
        .openOperationInvoiceDialog()
        .then(function (invoice) {})
        .catch(null)
        .finally(null);
    }
  }
})();
