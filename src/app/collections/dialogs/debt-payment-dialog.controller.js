(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .controller('CollectionsDebtPaymentDialogController', CollectionsDebtPaymentDialogController);

  CollectionsDebtPaymentDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function CollectionsDebtPaymentDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.payment = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Debt Payment';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.payment);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
