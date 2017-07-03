(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtorContactsViewer', debtorContactsViewer);

  debtorContactsViewer.$inject = ['$q'];

  function debtorContactsViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        contacts: '='
      },
      controller: DebtorContactsViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/debtor-manager/debtor-contacts-viewer/debtor-contacts-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtorContactsViewerController() {
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
