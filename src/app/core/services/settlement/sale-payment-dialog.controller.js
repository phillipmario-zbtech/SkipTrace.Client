(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('SalePaymentDialogController', SalePaymentDialogController);

  SalePaymentDialogController.inject = ['invoice', '$q', 'lookupService', 'PricingService', 'SettlementService', '$uibModalInstance'];
  /* ngInject */
  function SalePaymentDialogController(invoice, $q, lookupService, PricingService, SettlementService, $uibModalInstance) {
    var vm = this;
    vm.payment = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Sale Payment' + invoice.subscription.id;
    vm.receiptNo = 'Receipt No - ' + SettlementService.nextReceiptNo(); 
    vm.charges = {};
    vm.paymentMethods = [];
    vm.transactionTypes = [];
    vm.agents = [];
    vm.payment = {
      paymentMethod: 0
    };
    vm.isCheque = false;
    vm.checkIsCheque = checkIsCheque;
    vm.getCharges = getCharges;
    activate();


    ////////////////

    function activate() {

      var promises = [getPaymentMethods(), getTransactionTypes(), getAgents()];
      $q.all(promises)
        .then(function () {
          //log('Activated Members');
        });
    }

    function getCharges() {
      PricingService
        .calculateSalePaymentCharges(vm.payment)
        .then(function (data) {
          vm.charges = data
        })
        .catch()
        .finally();
    }

    function ok() {
      $uibModalInstance.close(vm.payment);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }


    function checkIsCheque() {
      switch (vm.payment.paymentMethod) {
        case 2:
          vm.isCheque = true;
          break;
        default:
          vm.isCheque = false;
      }
    }


    function getPaymentMethods() {
      return lookupService.getPaymentMethods()
        .then(function (data) {
          vm.paymentMethods = data;
        });
    }

    function getTransactionTypes() {
      return lookupService.getTransactionTypes()
        .then(function (data) {
          vm.transactionTypes = data;
        });
    }

    function getAgents() {
      return lookupService.getAgents()
        .then(function (data) {
          vm.agents = data;
        })
    }
  }
})();
