(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtorAddressesViewer', debtorAddressesViewer);

  debtorAddressesViewer.$inject = ['$q'];

  function debtorAddressesViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        addresses: '='
      },
      controller: DebtorAddressesViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/debtor-manager/debtor-addresses-viewer/debtor-addresses-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtorAddressesViewerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    
    activate();
    //////////////////////////////////////////////
    function activate() {
      vm.status.loaded = true;
      var promises = [];
      $q.all(promises)
        .then(function () {})
        .catch(null)
        .finally(function () {
          vm.status.loaded = false;
        });
    }
  }
})();
