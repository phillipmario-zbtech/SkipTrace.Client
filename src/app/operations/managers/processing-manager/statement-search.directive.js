(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('statementSearch', statementSearch);

  statementSearch.inject = ['SubscriberService'];
  function statementSearch(SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = { 
      controller: StatementSearchController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      replace: true,
      scope: {
        search: '&',
        searchText: '='
      },
      templateUrl: 'app/operations/processing-manager/statement-search.html'
    };
    return directive;

    function link(scope, element, attrs) {
      scope.internalSearchText = "";
      scope.searchClicked = function () {
        if (scope.internalSearchText) {
          scope.searchText = scope.internalSearchText;
        } else {
          scope.searchText = null;
        }
        scope.search();
      }
      scope.$watch('searchText',
        function (newTxt, oldTxt) {
          if (newTxt && newTxt !== oldTxt) {
            scope.internalSearchText = newTxt;
          }
        },
        true);
    }
  }
  /* @ngInject */
  function StatementSearchController() {

  }
})();