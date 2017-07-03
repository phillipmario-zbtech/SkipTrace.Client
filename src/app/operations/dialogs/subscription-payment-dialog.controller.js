(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('OperationsSubscriptionPaymentDialogController', OperationsSubscriptionPaymentDialogController);

  OperationsSubscriptionPaymentDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function OperationsSubscriptionPaymentDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.payment = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'SubscriptionPayment';
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
