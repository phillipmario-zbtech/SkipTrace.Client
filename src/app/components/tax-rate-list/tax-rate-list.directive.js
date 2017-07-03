(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('taxRateList', taxRateList);

  taxRateList.$inject = ['$q'];

  function taxRateList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        taxRates: '='
      },
      controller: TaxRateListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/taxRate-list/taxRate-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function TaxRateListController() {
    var vm = this;
    vm.taxRate = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addTaxRate = addTaxRate;
    vm.deleteTaxRate = deleteTaxRate;

    function addTaxRate() {
      var taxRate = angular.copy(vm.taxRate);
      vm.taxRates.push(taxRate);
      vm.taxRate = {};
    }

    function deleteTaxRate(taxRate) {
      var index = vm.taxRates.indexOf(taxRate);
      return vm.taxRates.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
