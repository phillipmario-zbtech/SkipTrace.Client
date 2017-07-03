(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('agenda', agenda);

  agenda.$inject = ['$q'];

  function agenda($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: AgendaController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/agenda/agenda.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function AgendaController() {
    var vm = this;
  }
})();
