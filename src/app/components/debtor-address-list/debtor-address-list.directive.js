(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtorAddressList', debtorAddressList);

  debtorAddressList.$inject = ['$q'];

  function debtorAddressList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        debtorAddresses: '='
      },
      controller: DebtorAddressListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/debtorAddress-list/debtorAddress-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtorAddressListController() {
    var vm = this;
    vm.debtorAddress = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addDebtorAddress = addDebtorAddress;
    vm.deleteDebtorAddress = deleteDebtorAddress;

    function addDebtorAddress() {
      var debtorAddress = angular.copy(vm.debtorAddress);
      vm.debtorAddresses.push(debtorAddress);
      vm.debtorAddress = {};
    }

    function deleteDebtorAddress(debtorAddress) {
      var index = vm.debtorAddresses.indexOf(debtorAddress);
      return vm.debtorAddresses.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
