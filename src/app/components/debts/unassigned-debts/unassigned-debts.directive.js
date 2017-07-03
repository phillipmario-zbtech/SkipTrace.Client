(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .directive('unassignedDebts', unassignedDebts);

  unassignedDebts.$inject = ['$q', 'LiabilityService'];

  function unassignedDebts($q, LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller:  UnassignedDebtsController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/debts/unassigned-debts/unassigned-debts.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function  UnassignedDebtsController($q, LiabilityService) {
    var vm = this;
    vm.title = 'Unassigned Debts';
    vm.ls = LiabilityService;
    vm.assignDebtToCollector = assignDebtToCollector;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };


    activate();
    //////////////////////////////////////////////
    function activate() {
      vm.status.busy = true;
      vm.status.loaded = false;
      var promises = [];
      $q.all(promises)
        .then(function () {})
        .catch(null)
        .finally(function () {
          vm.status.busy = false;
          vm.status.loaded = true;
        });
    }

    function getUnassignedDebts() {
      LiabilityService.getUnassignedDebts();
      vm.debts = LiabilityService.getUnassignedDebts;
    }

    function assignDebtToCollector(debt) {
      return LiabilityService.openAssignDebtToCollectorDialog(debt.id)
        .then()
        .catch()
        .finally();

    }
  }

})();
