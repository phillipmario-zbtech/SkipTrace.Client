(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .directive('ledgerManager', ledgerManager);

  ledgerManager.$inject = ['collectionsState'];

  function ledgerManager(collectionsState) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: LedgerManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/managers/ledger-manager/ledger-manager.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function LedgerManagerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    
    activate();
    //////////////////////////////////////////////
    function activate() {
      vm.status.loaded = true;
      var promises = [];
      $q.all(promises)
        .then(function () {})
        .catch(null)
        .finally(function () {
          vm.status.loaded = false;
        });
    }
  }
})();
