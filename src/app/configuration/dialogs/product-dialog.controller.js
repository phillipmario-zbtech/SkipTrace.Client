(function () {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .controller('ConfigurationProductDialogController', ConfigurationProductDialogController);

  ConfigurationProductDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function ConfigurationProductDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.product = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Company';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.product);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
