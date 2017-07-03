(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtOwnersViewer', debtOwnersViewer);

  debtOwnersViewer.$inject = ['$q', 'LiabilityService'];
  function debtOwnersViewer($q, LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        owners: '=',
        debt:'='
      },
      controller: DebtOwnersViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      },
      templateUrl: 'app/collections/debt-manager/debt-owners-viewer/debt-owners-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function DebtOwnersViewerController($q, LiabilityService) {
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