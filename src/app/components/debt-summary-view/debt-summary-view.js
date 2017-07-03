(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtSummaryView', debtSummaryView);

  debtSummaryView.inject = ['LiabilityService'];

  function debtSummaryView(LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        debt: '='
      },
      controller: DebtSummaryViewController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      bindings: {
        debt: '=',
      },
      templateUrl: 'app/components/debt-summary-view/debt-summary-view.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtSummaryViewController() {
    var vm = this;
    activate();

    function activate(){ 
    }
  }
})();
