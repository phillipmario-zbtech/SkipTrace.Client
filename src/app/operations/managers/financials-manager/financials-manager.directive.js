(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .directive('financialsManager', financialsManager);

  financialsManager.$inject = ['operationsState'];

  function financialsManager(operationsState) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: FinancialsManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/financials-manager/financials-manager.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function FinancialsManagerController() {
    var vm = this;
  }
})();
