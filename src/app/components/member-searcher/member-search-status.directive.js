(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('memberSearchStatus', memberSearchStatus);

  memberSearchStatus.inject = ['SubscriberService'];
  function memberSearchStatus(SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = { 
      controller: MemberSearchStatusController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {
        filters: '=',
        members: '=',
        searchStatus: '='
      },
      templateUrl: 'app/components/member-searcher/member-search-status.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function MemberSearchStatusController() {

  }
})();