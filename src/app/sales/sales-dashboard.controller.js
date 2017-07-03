(function () {
  'use strict';

  angular
    .module('skiptrace.sales')
    .controller('SalesDashboardController', SalesDashboardController);

  SalesDashboardController.$inject = ['salesState', '$aside', '$q', '$scope', '$state', '$stateParams', 'logger', 'guardSvc', 'userSvc', 'exception', 'alertService'];

  /* @ngInject */
  function SalesDashboardController(salesState, $aside, $q, $scope, $state, $stateParams, logger, guardSvc, userSvc, exception, alertService) {
    var vm = this;
    vm.guardSvc = guardSvc;

    activate();

    ////////////////

    function activate() {}

  }
})();
