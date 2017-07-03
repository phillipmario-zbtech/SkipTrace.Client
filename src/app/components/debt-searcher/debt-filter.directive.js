(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtFilter', debtFilter);

  debtFilter.inject = ['SubscriberService'];
  function debtFilter(SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      controller: DebtFilterController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {
        availableFilters: '=',
        query: '='
      },
      templateUrl: 'app/components/debt-searcher/debt-filter.html'
    };
    return directive;


    function link(scope, element, attrs) {
      scope.setSelected = setSelected;

      function setSelected(filterType, filterValue) {
        //if value is already selected remove it, otherwise add it
        //must convert id to string as it will always be a string in $routeparams
        var id = filterValue.id.toString();
        if (scope.query[filterType] && scope.query[filterType].indexOf(id) >= 0) {
          if (Array.isArray(scope.query[filterType])) {
            scope.query[filterType].splice(scope.query[filterType].indexOf(id), 1);
          } else {
            scope.query[filterType] = [];
          }
        } else {
          if (!scope.query[filterType]) {
            scope.query[filterType] = [];
          }
          scope.query[filterType].push(id);
        }
      }
    }
  }
  /* @ngInject */
  function DebtFilterController() {

  }
})();