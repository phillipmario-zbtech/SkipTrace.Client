(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('DebtorDialogController', DebtorDialogController);

  DebtorDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function DebtorDialogController($uibModalInstance, lookupService) {
    var vm = this;

    vm.steps = ['one', 'two', 'three'];
    vm.step = 0;
    vm.wizard = {
      tacos: 2
    };
    vm.debtor = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Debtor';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.debtor);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
 
  }
})();
