(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('OperationsDebtInvoiceDialogController', OperationsDebtInvoiceDialogController);

  OperationsDebtInvoiceDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function OperationsDebtInvoiceDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.invoice = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'DebtInvoice';
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
