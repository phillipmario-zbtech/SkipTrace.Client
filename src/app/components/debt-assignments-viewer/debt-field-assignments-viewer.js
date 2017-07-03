(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtFieldAssignmentsViewer', debtFieldAssignmentsViewer);

  debtFieldAssignmentsViewer.$inject = ['$q', 'LiabilityService'];
  function debtFieldAssignmentsViewer($q, LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        assignments: '='
      },
      controller: DebtFieldAssignmentsViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      },
      templateUrl: 'app/collections/debt-manager/debt-assignments-viewer/debt-field-assignments-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function DebtFieldAssignmentsViewerController($q, LiabilityService) {
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