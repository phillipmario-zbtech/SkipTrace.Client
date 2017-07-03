(function () {
  'use strict';

  angular
    .module('skiptrace.sales')
    .controller('SalesAgentViewerController', SalesAgentViewerController);

  SalesAgentViewerController.$inject = ['agent'];
  /* @ngInject */
  function SalesAgentViewerController(agent) {
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
