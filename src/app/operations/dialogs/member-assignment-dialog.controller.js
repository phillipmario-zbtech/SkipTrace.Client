(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('OperationsMemberAssignmentDialogController', OperationsMemberAssignmentDialogController);

  OperationsMemberAssignmentDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function OperationsMemberAssignmentDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.assignment = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'MemberAssignment';
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
