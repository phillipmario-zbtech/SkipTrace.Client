(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('ZoneDialogController', ZoneDialogController);

  ZoneDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function ZoneDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.zone = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Zone Configuration';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.zone);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
