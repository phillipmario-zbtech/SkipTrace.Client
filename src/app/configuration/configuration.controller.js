(function () {
  'use strict';

  angular
    .module('skiptrace.configuration')
    .value('configurationState', {})
    .controller('ConfigurationController', ConfigurationController);

  ConfigurationController.inject = ['configurationState', 'config', '$q', '$scope', '$state', '$stateParams', 'logger', 'guardSvc', 'userSvc', 'exception', 'alertService', 'ConfigurationService'];
  /* @ngInject */
  function ConfigurationController(configurationState, config, $q, $scope, $state, $stateParams, logger, guardSvc, userSvc, exception, alertService, ConfigurationService) {
    var vm = this;
    vm.guardSvc = guardSvc;
    vm.moduleInfo = {
      title: 'Configuration',
      helpText: 'This Module allows allows System Management.'
    };
    vm.startTour = function () {
      var x = uiTourService.getTourByName('configurationTour');
      x.start()
    }
    vm.openCompanyDialog = openCompanyDialog;
    activate();

    ////////////////

    function activate() {
      var promises = [];
      return $q.all(promises).then(function () {
        logger.info('Activating Configuration Module');
      });
    }

    function openCompanyDialog() {
      return ConfigurationService.openCompanyDialog();
    }
  }
})();
