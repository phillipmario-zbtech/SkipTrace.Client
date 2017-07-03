(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('CollectionPaymentDialogController', CollectionPaymentDialogController);

  CollectionPaymentDialogController.inject = ['debt', '$q', 'lookupService', 'PricingService', 'SettlementService', '$uibModalInstance'];
  /* ngInject */
  function CollectionPaymentDialogController(debt, $q, lookupService, PricingService, SettlementService, $uibModalInstance) {
    var vm = this;
    vm.payment = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Collection Payment';
    vm.receiptNo = 'Receipt No - ' + SettlementService.nextReceiptNo(); 
    vm.charges = {};
    vm.paymentMethods = [];
    vm.transactionTypes = [];
    vm.collectors = [];
    vm.payment = {
      paymentMethod: null
    };
    vm.isCheque = false;
    vm.checkIsCheque = checkIsCheque;
    vm.getCharges = getCharges;
    activate();


    ////////////////

    function activate() {

      var promises = [getPaymentMethods(), getTransactionTypes(), getCollectors()];
      $q.all(promises)
        .then(function () {
          //log('Activated Members');
        });
    }

    function getCharges() { 
      PricingService
        .calculateCollectionPaymentCharges(vm.payment)
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

    function getCollectors() {
      return lookupService.getCollectors()
        .then(function (data) {
          vm.collectors = data;
        })
    }
  }
})();
