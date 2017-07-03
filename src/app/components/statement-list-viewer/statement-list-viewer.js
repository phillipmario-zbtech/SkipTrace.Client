(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('statementListViewer', statementListViewer);

  statementListViewer.inject = ['$q'];
  function statementListViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: StatementListViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      },
      templateUrl: 'app/components/statement-list-viewer/statement-list-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function StatementListViewerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.gridOptions = { 
      data: [
        {
          "StatementDate": "samle",
          "Member": "sample",
          "ReceiptCount": "sample",
          "InvoiceCount": "sample",
          "ChequeAmount": "sample",
          "Printable": true
        }

      ]
    };
  }
})();