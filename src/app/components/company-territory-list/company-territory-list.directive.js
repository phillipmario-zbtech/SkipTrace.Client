(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('companyTerritoryList', companyTerritoryList);

  companyTerritoryList.$inject = ['$q'];

  function companyTerritoryList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        companyTerritories: '='
      },
      controller: CompanyTerritoryListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/company-territory-list/company-territory-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function CompanyTerritoryListController() {
    var vm = this;
    vm.companyTerritory = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addCompanyTerritory = addCompanyTerritory;
    vm.deleteCompanyTerritory = deleteCompanyTerritory;

    function addCompanyTerritory() {
      var companyTerritory = angular.copy(vm.companyTerritory);
      vm.companyTerritories.push(companyTerritory);
      vm.companyTerritory = {};
    }

    function deleteCompanyTerritory(companyTerritory) {
      var index = vm.companyTerritories.indexOf(companyTerritory);
      return vm.companyTerritories.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
