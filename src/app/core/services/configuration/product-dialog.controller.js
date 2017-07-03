(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('ProductDialogController', ProductDialogController);

  ProductDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function ProductDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.product = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Product Configuration';
    vm.min = 42;
    vm.max = 97;
    vm.rating = 4;
    vm.hoverRating = function (rating) {}
    vm.leftRating = function () {}
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
