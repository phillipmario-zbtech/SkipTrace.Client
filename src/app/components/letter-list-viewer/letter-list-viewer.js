(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('letterListViewer', letterListViewer);

  letterListViewer.inject = ['$q'];
  function letterListViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: LetterListViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      }, 
      templateUrl:'app/components/letter-list-viewer/letter-list-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function LetterListViewerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
  }
})();