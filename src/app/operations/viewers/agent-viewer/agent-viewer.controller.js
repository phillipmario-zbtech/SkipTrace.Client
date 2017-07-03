(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('OperationsAgentViewerController', OperationsAgentViewerController);

  OperationsAgentViewerController.$inject = ['agent'];
  /* @ngInject */
  function OperationsAgentViewerController(agent) {
    var vm = this;
    vm.banner = {
      title: agent.employeeName,
      content: agent.status
    };

    vm.agent = agent;

    activate();

    ////////////////

    function activate() { 
    }
  }
})();
