(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('memberAddressesViewer', memberAddressesViewer);

  memberAddressesViewer.$inject = ['$q'];

  function memberAddressesViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        addresses: '='
      },
      controller: MemberAddressesViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/member-manager/member-addresses-viewer/member-addresses-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function MemberAddressesViewerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
  }
})();
