(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('CollectionsCollectorViewerController', CollectionsCollectorViewerController);

  CollectionsCollectorViewerController.$inject = ['collector'];
  /* @ngInject */
  function CollectionsCollectorViewerController(collector) {
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
