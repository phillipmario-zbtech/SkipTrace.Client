(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('collectorTasksViewer', collectorTasksViewer);

  collectorTasksViewer.$inject = ['$q'];

  function collectorTasksViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        tasks: '='
      },
      controller: CollectorTasksViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/collector-tasks/collector-tasks.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function CollectorTasksViewerController($q) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };

    activate();
    //////////////////////////////////////////////
    function activate() {
      vm.status.busy = true;
      vm.status.loaded = false;
      var promises = [];
      $q.all(promises)
        .then(function () {})
        .catch(null)
        .finally(function () {
          vm.status.busy = false;
          vm.status.loaded = true;
        });
    }

    function getCollectorTasks() {
      //AgendaService.getCollectorTasks();
      //vm.tasks =  AgendaService.getCollectorTasks;
    }
  }
})();
