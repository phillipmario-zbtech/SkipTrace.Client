(function () {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .controller('ConfigurationEmployeeDialogController', ConfigurationEmployeeDialogController);

  ConfigurationEmployeeDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function ConfigurationEmployeeDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.employee = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Company';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.employee);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
