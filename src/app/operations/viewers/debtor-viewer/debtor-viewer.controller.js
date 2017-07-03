(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .controller('CollectionsDebtorManagerController', CollectionsDebtorManagerController);

  CollectionsDebtorManagerController.$inject = ['debtor'];
  /* @ngInject */
  function CollectionsDebtorManagerController(debtor) {
    var vm = this;
    vm.banner = {
      title: debtor.debtorName,
      content: debtor.status
    };
    vm.debtor = debtor; 
    activate();

    ////////////////

    function activate() {}
  }
})();
