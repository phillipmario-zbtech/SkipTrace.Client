(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('SalesApplicationDialogController', SalesApplicationDialogController);

  SalesApplicationDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function SalesApplicationDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.application = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Application';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.application);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
