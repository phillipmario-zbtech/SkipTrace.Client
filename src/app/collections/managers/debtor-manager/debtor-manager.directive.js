(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .directive('debtorManager', debtorManager);

  debtorManager.$inject = ['LiabilityService'];

  function debtorManager(LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: DebtorManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/managers/debtor-manager/debtor-manager.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtorManagerController() {
    var vm = this;
  }
})();
