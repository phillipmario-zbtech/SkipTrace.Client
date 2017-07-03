(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('OperationsDashboardController', OperationsDashboardController);

  OperationsDashboardController.$inject = ['operationsState', 'config', '$q', '$scope', '$state', '$stateParams', 'logger', 'guardSvc', 'userSvc', 'exception', 'alertService',
    'BillingService'
  ];

  function OperationsDashboardController(operationsState, config, $q, $scope, $state, $stateParams, logger, guardSvc, userSvc, exception, alertService, BillingService) {
    var vm = this;
    vm.guardSvc = guardSvc;

    activate();

    ////////////////

    function activate() {}
  }
})();
