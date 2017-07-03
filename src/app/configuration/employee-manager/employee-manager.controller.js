(function () {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .controller('EmployeeManagerController', EmployeeManagerController);

  EmployeeManagerController.$inject = ['$q', 'ConfigurationService'];

  function EmployeeManagerController($q, ConfigurationService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
vm.openEmployeeDialog=openEmployeeDialog;
    activate();
    //////////////////////////////////////////////
    function activate() {
      vm.status.loaded = true;
      var promises = [getEmployees()];
      $q.all(promises)
        .then(function () {})
        .catch(null)
        .finally(function () {
          vm.status.loaded = false;
        });
    }

    function getEmployees() {

      vm.employees = ConfigurationService.getEmployees();

    }
    function openEmployeeDialog(){
      return ConfigurationService.openEmployeeDialog();
    }
  }
})();
