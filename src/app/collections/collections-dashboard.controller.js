(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .controller('CollectionsDashboardController', CollectionsDashboardController);

  CollectionsDashboardController.inject = ['collectionsState', '$aside', '$q', '$scope', '$state', '$stateParams', 'logger', 'guardSvc', 'userSvc', 'exception', 'alertService', 'LiabilityService'];
  /* @ngInject */
  function CollectionsDashboardController(collectionsState, $aside, $q, $scope, $state, $stateParams, logger, guardSvc, userSvc, exception, alertService, LiabilityService) {
    var vm = this;
    vm.title = 'Collections Dashboard';
    vm.user = {};
    vm.guardSvc = guardSvc;
    vm.debtView = {
      templateUrl: 'debtPopoverSummary.html',
      title: 'Debt Summary'
    };
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    
    activate();
    //////////////////////////////////////////////
    function activate() {
      vm.status.loaded = true;
      var promises = [];
      $q.all(promises)
        .then(function () {})
        .catch(null)
        .finally(function () {
          vm.status.loaded = false;
        });
    }
  }
})();
