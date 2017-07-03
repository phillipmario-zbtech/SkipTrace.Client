(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtorIdentifiersViewer', debtorIdentifiersViewer);

  debtorIdentifiersViewer.$inject = ['$q'];

  function debtorIdentifiersViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        identifiers: '='
      },
      controller: DebtorIdentifiersViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/debtor-manager/debtor-identifiers-viewer/debtor-identifiers-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtorIdentifiersViewerController() {
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
