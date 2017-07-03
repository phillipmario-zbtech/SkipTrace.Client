(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('SaleInvoiceDialogController', SaleInvoiceDialogController);

  SaleInvoiceDialogController.inject = ['subscription', '$q', 'lookupService', 'PricingService', '$uibModalInstance'];
  /* ngInject */
  function SaleInvoiceDialogController(subscription, $q, lookupService, PricingService, $uibModalInstance) {
    var vm = this;
    vm.invoice = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Sale Invoice';
    vm.getCharges = getCharges;
    activate();

    ////////////////

    function activate() {

      var promises = [getAgents()];
      $q.all(promises)
        .then(function () {
          //log('Activated Members');
        });
    }

    function ok() {
      $uibModalInstance.close(vm.invoice);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function getCharges() {
      PricingService
        .calculateSaleInvoiceCharges(vm.payment)
        .then(function (data) {
          vm.charges = data
        })
        .catch()
        .finally();
    }

    function getAgents() {
      return lookupService.getAgents()
        .then(function (data) {
          vm.agents = data;
        })
    }
  }
})();
