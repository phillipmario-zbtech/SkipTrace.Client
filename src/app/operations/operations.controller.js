(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('OperationsController', OperationsController);

  OperationsController.inject = ['operationsState', 'uiTourService', '$aside', '$q', '$stateParams', 'logger', 'guardSvc', 'userSvc', 'exception', 'alertService',
    'BillingService'
  ];
  /* @ngInject */
  function OperationsController(operationsState, uiTourService, $aside, $q, $stateParams, logger, guardSvc, userSvc, exception, alertService, BillingService) {
    var vm = this;
    vm.openLeftAside = openLeftAside;
    vm.openRightAside = openRightAside;
    vm.guardSvc = guardSvc;
    vm.moduleInfo = {
      title: 'Operations/Back Office Administration',
      helpText: 'This Module allows back office support. Configuration of Member Subscriptions, Monthly Blling and Debt Management can be performed here.'
    }

    vm.bs = BillingService;   
     vm.startTour = function () {
      var x = uiTourService.getTourByName('operationsTour');
      x.start()
    }
    activate();
    /////////////////////////////// 

    function activate() {
      var promises = [];
      return $q.all(promises).then(function () {
        logger.info('Activated Operations Module');
      });
    }

    function openLeftAside() {
      var asideInstance = $aside.open({
        templateUrl: 'app/operations/operations-left.html',
        controller: 'OperationsLeftAsideController',
        controllerAs: 'vm',
        placement: 'left',
        size: 'md'
      });
    }

    function openRightAside() {
      var asideInstance = $aside.open({
        templateUrl: 'app/operations/operations-right.html',
        controller: 'OperationsRightAsideController',
        controllerAs: 'vm',
        placement: 'right',
        size: 'md'
      });
    }


  }
})();
