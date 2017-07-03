(function () {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .controller('ConfigurationCompanyDialogController', ConfigurationCompanyDialogController);

  ConfigurationCompanyDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function ConfigurationCompanyDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.company = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Debt Assignment';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.company);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
