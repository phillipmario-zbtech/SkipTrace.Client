(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtorJobsViewer', debtorJobsViewer);

  debtorJobsViewer.$inject = ['$q'];

  function debtorJobsViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        jobs: '='
      },
      controller: DebtorJobsViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/debtor-manager/debtor-jobs-viewer/debtor-jobs-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtorJobsViewerController() {
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
