(function() {
'use strict';

  angular
    .module('skiptrace.security')
    .controller('AuditController', AuditController);

  AuditController.inject = [];
  function AuditController() {
    var vm = this;
    vm.title = 'SkipTrace Audit Logs';

    activate();

    ////////////////

    function activate() { 
     }
  }
})();