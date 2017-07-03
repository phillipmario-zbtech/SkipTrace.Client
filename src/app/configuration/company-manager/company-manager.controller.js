(function () {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .controller('CompanyManagerController', CompanyManagerController);

  CompanyManagerController.$inject = [  'ConfigurationService'];

  function CompanyManagerController(  ConfigurationService) {
    var vm = this; 

    activate();

    ////////////////

    function activate() { 
    }
  }
})();
