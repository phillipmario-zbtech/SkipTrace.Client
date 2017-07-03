(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtTransactionsViewer', debtTransactionsViewer);

  debtTransactionsViewer.$inject = ['$q'];

  function debtTransactionsViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        transactions: '='
      },
      controller: DebtTransactionsViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/debt-transactions-viewer/debt-transactions-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtTransactionsViewerController() {
    var vm = this;
  }
})();
