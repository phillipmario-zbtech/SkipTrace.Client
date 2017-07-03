(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('OperationsCollectorViewerController', OperationsCollectorViewerController);

  OperationsCollectorViewerController.$inject = ['collector'];
  /* @ngInject */
  function OperationsCollectorViewerController(collector) {
    var vm = this;
    vm.banner = {
      title: collector.employeeName,
      content: collector.status
    };

    vm.collector = collector;

    activate();

    ////////////////

    function activate() { 
    }
  }
})();
