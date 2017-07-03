(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('memberSort', memberSort);

  memberSort.inject = ['SubscriberService'];
  function memberSort(SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = { 
      controller: MemberSortController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {
        orderByOptions: '=',
        orderBy: '='
      },
      templateUrl: 'app/components/member-searcher/member-sort.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function MemberSortController() {

  }
})();