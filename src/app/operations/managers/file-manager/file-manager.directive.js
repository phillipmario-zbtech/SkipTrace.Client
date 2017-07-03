(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .directive('fileManager', fileManager);

  fileManager.$inject = ['operationsState'];

  function fileManager(operationsState) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: FileManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/file-manager/file-manager.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function FileManagerController() {
    var vm = this;
  }
})();
