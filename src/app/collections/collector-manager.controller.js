(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .controller('CollectionsCollectorManagerController', CollectionsCollectorManagerController);

  CollectionsCollectorManagerController.$inject = ['collector'];
  /* @ngInject */
  function CollectionsCollectorManagerController(collector) {
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
