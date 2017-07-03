(function () {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .controller('OperationsEmployeeViewerController', OperationsEmployeeViewerController);

  OperationsEmployeeViewerController.$inject = ['employee', 'ConfigurationService'];
  /* @ngInject */
  function OperationsEmployeeViewerController(employee, ConfigurationService ) {
    var vm = this;
    vm.banner = {
      title: employee.employeeName,
      content: employee.status
    };

    vm.employee = employee;  
    
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
