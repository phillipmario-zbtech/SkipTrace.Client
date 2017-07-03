(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('appointmentsViewer', appointmentsViewer);

  appointmentsViewer.$inject = ['AgendaService'];

  function appointmentsViewer(AgendaService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: AppointmentsViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/agenda/appointments-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function AppointmentsViewerController(AgendaService) {
    var vm = this;
  }
})();
