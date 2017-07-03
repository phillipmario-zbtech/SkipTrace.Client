(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('OperationsDebtPaymentDialogController', OperationsDebtPaymentDialogController);

  OperationsDebtPaymentDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function OperationsDebtPaymentDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.payment = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'DebtPayment';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.payment);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
