(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtorListViewer', debtorListViewer);

  debtorListViewer.inject = ['$q'];

  function debtorListViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: DebtorListViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/debtor-list-viewer/debtor-list-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtorListViewerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.debtorView = {
      templateUrl: 'debtorPopoverSummary.html',
      title: 'Debtor Summary'
    };
  }
})();
