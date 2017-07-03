(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('memberLettersViewer', memberLettersViewer);

  memberLettersViewer.$inject = ['$q'];
  function memberLettersViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        member: '='
      },
      controller: MemberLettersViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      },
      templateUrl: 'app/operations/member-manager/member-letters-viewer/member-letters-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function MemberLettersViewerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
  }
})();