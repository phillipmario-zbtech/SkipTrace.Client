(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtViewer', debtViewer);

  debtViewer.$inject = ['$q'];
  function debtViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: DebtViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'A',
      scope: {
      }
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function DebtViewerController() {
    var vm = this;
  }
})();