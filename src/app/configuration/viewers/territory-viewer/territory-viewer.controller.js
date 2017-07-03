(function () {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .controller('OperationsTerritoryViewerController', OperationsTerritoryViewerController);

  OperationsTerritoryViewerController.$inject = ['territory', 'ConfigurationService'];
  /* @ngInject */
  function OperationsTerritoryViewerController(territory, ConfigurationService ) {
    var vm = this;
    vm.banner = {
      title: territory.territoryName,
      content: territory.status
    };

    vm.territory = territory;  
    
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
