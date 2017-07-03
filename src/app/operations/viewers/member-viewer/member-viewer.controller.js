(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .controller('OperationsMemberViewerController', OperationsMemberViewerController);

  OperationsMemberViewerController.$inject = ['member', 'SettlementService', 'BillingService', 'LiabilityService'];
  /* @ngInject */
  function OperationsMemberViewerController(member, SettlementService, BillingService, LiabilityService) {
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
    vm.viewDetails = viewDetails;
    activate();

    ////////////////

    function activate() {}

    function newDebt() {
      return LiabilityService.openLiabilityDialog(member)
        .then(function () {
          //console.log(data);;
        })
        .catch(null)
        .finally(null);
    }

    function viewDetails(debt) {}

    function openCollectionInvoicePaymentDialog() { 
      return SettlementService
        .openCollectionInvoicePaymentDialog(member)
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
 
    function openInvoiceDialog() {
      return BillingService
        .openOperationInvoiceDialog()
        .then(function (invoice) {})
        .catch(null)
        .finally(null);
    }
  }
})();
