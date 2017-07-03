(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .directive('debtManager', debtManager);

  debtManager.$inject = ['LiabilityService'];

  function debtManager(LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: DebtManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/managers/debt-manager/debt-manager.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtManagerController() {
    var vm = this;
  }
})();
