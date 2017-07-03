(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .controller('CollectionsDebtAssignmentDialogController', CollectionsDebtAssignmentDialogController);

  CollectionsDebtAssignmentDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function CollectionsDebtAssignmentDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.assignment = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Debt Assignment';
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
