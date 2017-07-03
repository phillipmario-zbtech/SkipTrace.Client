(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtSort', debtSort);

  debtSort.inject = ['SubscriberService'];
  function debtSort(SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = { 
      controller: DebtSortController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {
        orderByOptions: '=',
        orderBy: '='
      },
      templateUrl: 'app/components/debt-searcher/debt-sort.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function DebtSortController() {

  }
})();