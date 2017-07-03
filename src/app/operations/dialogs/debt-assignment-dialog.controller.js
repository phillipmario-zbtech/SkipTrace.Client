(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('OperationsDebtAssignmentDialogController', OperationsDebtAssignmentDialogController);

  OperationsDebtAssignmentDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function OperationsDebtAssignmentDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.assignment = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'DebtAssignment';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.assignment);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
