(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtAgreementsViewer', debtAgreementsViewer);

  debtAgreementsViewer.$inject = ['$q', 'LiabilityService'];

  function debtAgreementsViewer($q, LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        agreements: '='
      },
      controller: DebtAgreementsViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/debt-manager/debt-agreements-viewer/debt-agreements-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtAgreementsViewerController($q, LiabilityService) {
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
