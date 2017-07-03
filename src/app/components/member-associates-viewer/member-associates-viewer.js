(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('memberAssociatesViewer', memberAssociatesViewer);

  memberAssociatesViewer.$inject = ['$q'];
  function memberAssociatesViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        associates: '='
      },
      controller: MemberAssociatesViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      },
      templateUrl: 'app/operations/member-manager/member-associates-viewer/member-associates-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function MemberAssociatesViewerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
  }
})();