(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('CompanyDialogController', CompanyDialogController);

  CompanyDialogController.inject = ['$uibModalInstance','lookupService'];
  /* ngInject */
  function CompanyDialogController($uibModalInstance,lookupService) {
    var vm = this;
    vm.company = {};    
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Company Configuration';
    activate();

    ////////////////

    function activate() { }

    function ok() {
      $uibModalInstance.close(vm.company);
    }
    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();