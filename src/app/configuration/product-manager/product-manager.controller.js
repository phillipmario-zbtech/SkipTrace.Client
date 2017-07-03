(function() {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .controller('ProductManagerController', ProductManagerController);

  ProductManagerController.$inject = ['ConfigurationService'];
  function ProductManagerController(ConfigurationService) {
    var vm = this;
    

    activate();

    ////////////////

    function activate() { }
  }
})();