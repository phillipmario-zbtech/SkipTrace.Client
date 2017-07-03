(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('productChargeList', productChargeList);

  productChargeList.$inject = ['$q'];

  function productChargeList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        productCharges: '='
      },
      controller: ProductChargeListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/productCharge-list/productCharge-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function ProductChargeListController() {
    var vm = this;
    vm.productCharge = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addProductCharge = addProductCharge;
    vm.deleteProductCharge = deleteProductCharge;

    function addProductCharge() {
      var productCharge = angular.copy(vm.productCharge);
      vm.productCharges.push(productCharge);
      vm.productCharge = {};
    }

    function deleteProductCharge(productCharge) {
      var index = vm.productCharges.indexOf(productCharge);
      return vm.productCharges.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
