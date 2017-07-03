(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtTransferManager', debtTransferManager);

  debtTransferManager.inject = ['$q', 'LiabilityService'];

  function debtTransferManager($q, LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: DebtTransferManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/debts/debt-transfers/debt-transfers.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtTransferManagerController($q, LiabilityService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.canTransfer = false;
    vm.getCollectorDebts = getCollectorDebts;
    vm.sourceCollectors = [];
    vm.targetCollectors = [];
    vm.debts = [];
    vm.sourceCollector = 0;
    vm.targetCollector = 0;
    vm.toggleAll = toggleAll;
    vm.optionToggled = optionToggled;
    vm.reassignDebts = reassignDebts;
    vm.isChecked = function () {
      for (var e in vm.debts) {
        var checkBox = vm.debts[e];
        if (checkBox.selected  && vm.targetCollector)
          return true;
      }
      return false;
    };
    activate();
    ////////////////////////////// implementation  /////////////////////////////////
    function activate() {
      var promises = [getSourceCollectors()];
      $q.all(promises)
        .then(function () {
          //log('Activated Members');
        });

    }

    function toggleAll() {
      var toggleStatus = !vm.isAllSelected;
      angular.forEach(vm.debts, function (itm) {
        itm.selected = !toggleStatus;
      });
    }

    function optionToggled() {
      vm.canTransfer = vm.debts.length
      vm.isAllSelected = vm.debts.every(function (itm) {
        return itm.selected;
      })
    }

    function getSourceCollectors() {
      return LiabilityService.getCollectors()
        .then(function (data) {
          vm.sourceCollectors = data;
          vm.targetCollectors = data;
        })
        .catch(null)
        .finally(null);

    }

    function getTargetCollectors() {
      return LiabilityService.getCollectors()
        .then(function (data) {
          vm.sourceCollectors = data;
        })
        .catch(null)
        .finally(null);
    }

    function getCollectorDebts() {
      var id = vm.sourceCollector;
      return LiabilityService.getCollectorDebts({
          id: id
        })
        .then(
          function (data) {
            vm.debts = data;
            angular.forEach(vm.debts, function (itm) {
              itm.selected = true;
            });
            vm.isAllSelected = true;
          }
        )
        .catch(null)
        .finally(function () {
          //
        });
    }

    function reassignDebts() {
      var oldList = vm.debts;
      vm.debts = [];
      angular.forEach(oldList, function (x) {
        if (!x.selected) {
          vm.debts.push(x);
        } else {
          var transferRequest = {
            debtId: x.id,
            collectorId: vm.targetCollector
          }
          LiabilityService.transferDebt(transferRequest)
        }
      });
    }

  }
})();
