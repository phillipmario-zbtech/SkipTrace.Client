(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('AgreementDialogController', AgreementDialogController);

  AgreementDialogController.inject = ['debt', '$q', 'lookupService', 'PricingService', '$uibModalInstance'];
  /* ngInject */
  function AgreementDialogController(debt, $q, lookupService, PricingService, $uibModalInstance) {
    var vm = this;
    vm.agreement = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Debt Repayment Agreement';
    vm.getCharges = getCharges;
    activate();

    ////////////////
    function activate() {

      var promises = [getCollectors()];
      $q.all(promises)
        .then(function () {
          //log('Activated Members');
        });
    }

    function getCharges() {
      PricingService
        .calculateCollectionPaymentCharges(vm.payment)
        .then(function (data) {
          vm.charges = data
        })
        .catch()
        .finally();
    }

    function ok() {
      $uibModalInstance.close(vm.agreement);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function getCollectors() {
      return lookupService.getCollectors()
        .then(function (data) {
          vm.collectors = data;
        })
    }
  }
})();
