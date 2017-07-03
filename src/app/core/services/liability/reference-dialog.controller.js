(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('ReferenceDialogController', ReferenceDialogController);

  ReferenceDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function ReferenceDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.reference = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Reference';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.reference);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
