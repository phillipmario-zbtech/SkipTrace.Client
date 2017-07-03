(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('statementSort', statementSort);

  statementSort.inject = ['SubscriberService'];
  function statementSort(SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = { 
      controller: StatementSortController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {
        orderByOptions: '=',
        orderBy: '='
      },
      templateUrl: 'app/operations/processing-manager/statement-sort.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function StatementSortController() {

  }
})();