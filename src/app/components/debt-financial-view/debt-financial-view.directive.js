(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtFinancialView', debtFinancialView);

  debtFinancialView.$inject = ['$q', 'LiabilityService'];

  function debtFinancialView($q, LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: DebtFinancialViewController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
        debt: '='
      },
      templateUrl: 'app/collections/debt-manager/debt-financial-view/debt-financial-view.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtFinancialViewController($q, LiabilityService) {
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
