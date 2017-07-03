(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('ReasonDialogController', ReasonDialogController);

  ReasonDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function ReasonDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.reason = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Reason Configuration';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.reason);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
