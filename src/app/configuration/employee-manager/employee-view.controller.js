(function() {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .controller('EmployeeViewController', EmployeeViewController);

  EmployeeViewController.$inject = ['employee', 'ConfigurationService'];
  /* @ngInject */
  function EmployeeViewController(employee,ConfigurationService) {
    var vm = this;
    vm.employee = employee

    activate();

    ////////////////

    function activate() { }
  }
})();