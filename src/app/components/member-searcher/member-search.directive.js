(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('memberSearch', memberSearch);

  memberSearch.inject = ['SubscriberService'];
  function memberSearch(SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = { 
      controller: MemberSearchController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      replace: true,
      scope: {
        search: '&',
        searchText: '='
      },
      templateUrl: 'app/components/member-searcher/member-search.html'
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
  function MemberSearchController() {

  }
})();