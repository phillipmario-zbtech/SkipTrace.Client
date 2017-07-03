(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('territoryProductList', territoryProductList);

  territoryProductList.$inject = ['$q'];

  function territoryProductList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        territoryProducts: '='
      },
      controller: TerritoryProductListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/territoryProduct-list/territoryProduct-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function TerritoryProductListController() {
    var vm = this;
    vm.territoryProduct = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addTerritoryProduct = addTerritoryProduct;
    vm.deleteTerritoryProduct = deleteTerritoryProduct;

    function addTerritoryProduct() {
      var territoryProduct = angular.copy(vm.territoryProduct);
      vm.territoryProducts.push(territoryProduct);
      vm.territoryProduct = {};
    }

    function deleteTerritoryProduct(territoryProduct) {
      var index = vm.territoryProducts.indexOf(territoryProduct);
      return vm.territoryProducts.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
