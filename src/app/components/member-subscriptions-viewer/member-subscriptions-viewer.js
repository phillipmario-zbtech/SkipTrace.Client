(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('memberSubscriptionsViewer', memberSubscriptionsViewer);

  memberSubscriptionsViewer.$inject = ['$q'];
  function memberSubscriptionsViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        subscriptions: '='
      },
      controller: MemberSubscriptionsViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      },
      templateUrl: 'app/operations/member-manager/member-subscriptions-viewer/member-subscriptions-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function MemberSubscriptionsViewerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
  }
})();