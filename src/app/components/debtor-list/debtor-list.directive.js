(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtorList', debtorList);

  debtorList.$inject = ['$q'];

  function debtorList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        debtors: '='
      },
      controller: DebtorListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/debtor-list/debtor-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtorListController() {
    var vm = this;
    vm.debtor = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addDebtor = addDebtor;
    vm.deleteDebtor = deleteDebtor;

    function addDebtor() {
      var debtor = angular.copy(vm.debtor);
      vm.debtors.push(debtor);
      vm.debtor = {};
    }

    function deleteDebtor(debtor) {
      var index = vm.debtors.indexOf(debtor);
      return vm.debtors.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
