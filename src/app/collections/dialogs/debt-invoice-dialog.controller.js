(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .controller('CollectionsDebtInvoiceDialogController', CollectionsDebtInvoiceDialogController);

  CollectionsDebtInvoiceDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function CollectionsDebtInvoiceDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.invoice = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Debt Invoice';
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
