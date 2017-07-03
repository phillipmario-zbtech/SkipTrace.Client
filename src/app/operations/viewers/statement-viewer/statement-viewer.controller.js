(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('OperationsStatementViewerController', OperationsStatementViewerController);

  OperationsStatementViewerController.$inject = ['statement'];
  /* @ngInject */
  function OperationsStatementViewerController(statement) {
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
