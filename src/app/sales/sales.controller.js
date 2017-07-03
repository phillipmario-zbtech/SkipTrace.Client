(function () {
  'use strict';

  angular
    .module('skiptrace.sales')
    .value('salesState', {})
    .controller('SalesController', SalesController);


  SalesController.inject = ['operationsState', 'uiTourService', '$aside', '$q', '$stateParams', 'logger', 'guardSvc', 'userSvc', 'exception', 'alertService'];
  /* @ngInject */
  function SalesController(operationsState, uiTourService, $aside, $q, $stateParams, logger, guardSvc, userSvc, exception, alertService) {
    var vm = this;
    vm.openLeftAside = openLeftAside;
    vm.openRightAside = openRightAside;
    vm.guardSvc = guardSvc;
    vm.moduleInfo = {
      title: 'Sales & Product Marketing',
      helpText: 'This Module allows allows management of members, statements and agent/member relationships.'
    }

    vm.startTour = function () {
      var x = uiTourService.getTourByName('salesTour');
      x.start()
    }

    activate();


    ////////////////////////////////

    function activate() {
      var promises = [];
      return $q.all(promises).then(function () {
        logger.info('Activating Sales Module');
      });
    }

    function openLeftAside() {
      var asideInstance = $aside.open({
        templateUrl: 'app/sales/sales-left.html',
        controller: 'SalesLeftAsideController',
        controllerAs: 'vm',
        placement: 'left',
        size: 'md'
      });
    }

    function openRightAside() {
      var asideInstance = $aside.open({
        templateUrl: 'app/sales/sales-right.html',
        controller: 'SalesRightAsideController',
        controllerAs: 'vm',
        placement: 'right',
        size: 'md'
      });
    }






  }
})();
