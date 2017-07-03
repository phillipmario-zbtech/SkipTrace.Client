 (function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtorReferencesViewer', debtorReferencesViewer);

  debtorReferencesViewer.$inject = ['$q'];

  function debtorReferencesViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        references: '='
      },
      controller: DebtorReferencesViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/debtor-manager/debtor-references-viewer/debtor-references-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtorReferencesViewerController() {
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
