(function() {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtBalanceView', debtBalanceView);

  debtBalanceView.$inject = ['LiabilityService'];
  function debtBalanceView(LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
        bindToController: true,
        controller: DebtBalanceViewController,
        controllerAs: 'vm',
        link: link,
        restrict: 'EA',
        scope: {
        },
        template:'<span><h5>Balance</h5></span>'
    };
    return directive;
    
    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function DebtBalanceViewController () {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
  }
})();