(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('collectorProfileViewer', collectorProfileViewer);

  collectorProfileViewer.$inject = ['$q'];

  function collectorProfileViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        collector: '='
      },
      controller: CollectorProfileViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/collector-profile/collector-profile.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function CollectorProfileViewerController() {
    var vm = this;
  }
})();
