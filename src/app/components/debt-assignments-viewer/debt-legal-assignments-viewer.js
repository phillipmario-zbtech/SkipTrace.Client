(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtLegalAssignmentsViewer', debtLegalAssignmentsViewer);

  debtLegalAssignmentsViewer.$inject = ['$q', 'LiabilityService'];
  function debtLegalAssignmentsViewer($q, LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        assignments: '='
      },
      controller: DebtLegalAssignmentsViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      },
      templateUrl: 'app/collections/debt-manager/debt-assignments-viewer/debt-legal-assignments-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function DebtLegalAssignmentsViewerController($q, LiabilityService) {
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