(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('CollectionInvoiceDialogController', CollectionInvoiceDialogController);

  CollectionInvoiceDialogController.inject = ['debt', '$q', 'lookupService', 'PricingService', '$uibModalInstance'];
  /* ngInject */
  function CollectionInvoiceDialogController(debt, $q, lookupService, PricingService, $uibModalInstance) {
    var vm = this;
    vm.invoice = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Collection Invoice';
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

    function ok() {
      $uibModalInstance.close(vm.invoice);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function getCharges() {
      PricingService
        .calculateCollectionInvoiceCharges(vm.payment)
        .then(function (data) {
          vm.charges = data
        })
        .catch()
        .finally();
    }

    function getCollectors() {
      return lookupService.getCollectors()
        .then(function (data) {
          vm.collectors = data;
        })
    }
  }
})();
