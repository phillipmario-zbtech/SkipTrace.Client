(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .directive('collectorManager', collectorManager);

  collectorManager.$inject = ['LiabilityService'];

  function collectorManager(LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: CollectorManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/managers/collector-manager/collector-manager.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function CollectorManagerController() {
    var vm = this;
  }
})();
