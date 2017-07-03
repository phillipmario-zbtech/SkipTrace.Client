(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('OperationsSubscriptionInvoiceDialogController', OperationsSubscriptionInvoiceDialogController);

  OperationsSubscriptionInvoiceDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function OperationsSubscriptionInvoiceDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.invoice = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'SubscriptionInvoice';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.invoice);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
