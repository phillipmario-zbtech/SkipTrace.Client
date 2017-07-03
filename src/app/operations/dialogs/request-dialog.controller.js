(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('OperationsRequestDialogController', OperationsRequestDialogController);

  OperationsRequestDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function OperationsRequestDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.request = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Request';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.request);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
