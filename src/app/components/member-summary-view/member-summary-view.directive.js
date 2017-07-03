(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('memberSummaryView', memberSummaryView);

  memberSummaryView.$inject = ['$q', 'operationsState'];

  function memberSummaryView($q, operationsState) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        member: '='
      },
      controller: MemberSummaryViewController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/member-summary-view/member-summary-view.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function MemberSummaryViewController(operationsState) {
    var vm = this;
    operationsState.member = vm.member;
  }
})();
