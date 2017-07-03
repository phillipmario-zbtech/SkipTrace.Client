(function () {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .directive('productCatalog', productCatalog);

  productCatalog.$inject = ['ConfigurationService'];

  function productCatalog(ConfigurationService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: ProductCatalogController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/configuration/product-manager/product-catalog.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function ProductCatalogController() {
    var vm = this;
    vm.title = 'Product Catalog';
    
  }
})();
