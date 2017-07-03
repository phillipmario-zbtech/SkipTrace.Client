(function () {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .controller('OperationsProductViewerController', OperationsProductViewerController);

  OperationsProductViewerController.$inject = ['product', 'ConfigurationService'];
  /* @ngInject */
  function OperationsProductViewerController(product, ConfigurationService ) {
    var vm = this;
    vm.banner = {
      title: product.productName,
      content: product.status
    };

    vm.product = product;  
    
    activate();

    ////////////////

    function activate() {}
 

    function openPaymentDialog() {
      return SettlementService
        .openOperationPaymentDialog()
        .then(function (payment) {})
        .catch(null)
        .finally(null);
    }

 
  }
})();
