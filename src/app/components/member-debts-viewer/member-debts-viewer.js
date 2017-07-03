(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('memberDebtsViewer', memberDebtsViewer);

  memberDebtsViewer.$inject = ['$q'];

  function memberDebtsViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        debts: '=',
        viewDetails: '&'
      },
      controller: MemberDebtsViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/member-manager/member-debts-viewer/member-debts-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function MemberDebtsViewerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.details = details;
    vm.debtView = {
      templateUrl: 'debtPopoverSummary.html',
      title: 'Debt Summary'
    };

    function details(debt) {
      return vm.viewDetails(debt);
    }
  }
})();
