(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .directive('debtLedgersViewer', debtLedgersViewer);

  debtLedgersViewer.$inject = ['$q', 'LiabilityService'];

  function debtLedgersViewer($q, LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        ledgers: '='
      },
      controller: DebtLedgersViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/debt-manager/debt-ledgers-viewer/debt-ledgers-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtLedgersViewerController($q, LiabilityService) {
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
