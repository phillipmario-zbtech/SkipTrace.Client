(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtInputCheck', debtInputCheck);

  debtInputCheck.$inject = ['LiabilityService'];
  function debtInputCheck(LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: DebtInputCheckController,
      controllerAs: 'vm',
      link: link,
      restrict: 'A',
      scope: {
      },
       
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function DebtInputCheckController() {
    var vm = this;
    vm.checkDebtExists = LiabilityService.checkDebtExists;
  }
})();