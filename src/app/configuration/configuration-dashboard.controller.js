(function () {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .value('configurationState', {})
    .controller('ConfigurationDashboardController', ConfigurationDashboardController);

  ConfigurationDashboardController.inject = ['configurationState', 'confiog', '$q', '$scope', '$state', '$stateParams', 'logger', 'guardSvc', 'userSvc', 'exception', 'alertService', 'ConfigurationService'];
  /* @ngInject */
  function ConfigurationDashboardController(configurationState, config, $q, $scope, $state, $stateParams, logger, guardSvc, userSvc, exception, alertService, ConfigurationService) {
    var vm = this;
    vm.guardSvc = guardSvc; 

    vm.initializeFolders = initializeFolders;
    vm.openCompanyDialog = openCompanyDialog;
    vm.openEmployeeDialog = openEmployeeDialog;
    vm.openProductDialog = openProductDialog;
    vm.openZoneDialog = openZoneDialog;
    vm.openReasonDialog = openReasonDialog;
    
    activate();

    ////////////////

    function activate() {
      var promises = [];
      return $q.all(promises).then(function () {
     
      });
    }
    function initializeFolders(){
      return ConfigurationService.initializeFolders();
    }
    function openCompanyDialog() {
      ConfigurationService.openCompanyDialog();
    }

    function openEmployeeDialog() {
      ConfigurationService.openEmployeeDialog();
    }

    function openProductDialog() {
      ConfigurationService.openProductDialog();
    }

    function openZoneDialog() {
      ConfigurationService.openZoneDialog();
    }

    function openReasonDialog() {
      ConfigurationService.openReasonDialog();
    }
  }
})();
