(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtBackupsViewer', debtBackupsViewer);

  debtBackupsViewer.$inject = ['$q', 'LiabilityService'];
  function debtBackupsViewer($q, LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        debt: '='
      },
      controller: DebtBackupsViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      },
      templateUrl: 'app/collections/debt-manager/debt-backups-viewer/debt-backups-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function DebtBackupsViewerController($q, LiabilityService) {
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