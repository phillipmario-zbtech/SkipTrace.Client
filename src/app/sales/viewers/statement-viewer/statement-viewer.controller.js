(function () {
  'use strict';

  angular
    .module('skiptrace.sales')
    .controller('SalesStatementViewerController', SalesStatementViewerController);

  SalesStatementViewerController.$inject = ['statement'];
  /* @ngInject */
  function SalesStatementViewerController(statement) {
    var vm = this;
    vm.banner = {
      title: statement.employeeName,
      content: statement.status
    };

    vm.statement = statement;

    activate();

    ////////////////

    function activate() { 
    }
  }
})();
