(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtSearch', debtSearch);

  debtSearch.inject = ['SubscriberService'];
  function debtSearch(SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = { 
      controller: DebtSearchController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      replace: true,
      scope: {
        search: '&',
        searchText: '='
      },
      templateUrl: 'app/components/debt-searcher/debt-search.html'
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
  function DebtSearchController() {

  }
})();