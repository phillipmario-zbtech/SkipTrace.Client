(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('EmployeeDialogController', EmployeeDialogController);

  EmployeeDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function EmployeeDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.employee = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Employee Configuration';
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
