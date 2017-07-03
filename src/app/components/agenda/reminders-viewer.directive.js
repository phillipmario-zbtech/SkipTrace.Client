(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('remindersViewer', remindersViewer);

  remindersViewer.$inject = ['AgendaService'];

  function remindersViewer(AgendaService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: RemindersViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/agenda/reminders-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function RemindersViewerController(AgendaService) {
    var vm = this;
    
  }
})();
