(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtorAliasesViewer', debtorAliasesViewer);

  debtorAliasesViewer.$inject = ['$q'];

  function debtorAliasesViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        aliases: '='
      },
      controller: DebtorAliasesViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/debtor-manager/debtor-aliases-viewer/debtor-aliases-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtorAliasesViewerController() {
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
