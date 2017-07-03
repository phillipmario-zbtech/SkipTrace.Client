(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtTelephoneAssignmentsViewer', debtTelephoneAssignmentsViewer);

  debtTelephoneAssignmentsViewer.$inject = ['$q', 'LiabilityService'];
  function debtTelephoneAssignmentsViewer($q, LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        assignments: '='
      },
      controller: DebtTelephoneAssignmentsViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      },
      templateUrl: 'app/collections/debt-manager/debt-assignments-viewer/debt-telephone-assignments-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function DebtTelephoneAssignmentsViewerController($q, LiabilityService) {
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