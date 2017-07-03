(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('collectorTransactionsViewer', collectorTransactionsViewer);

  collectorTransactionsViewer.$inject = ['$q', 'BillingService', 'SettlementService'];

  function collectorTransactionsViewer($q, BillingService, SettlementService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        transactions: '='
      },
      controller: CollectorTransactionsViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/collector-transactions/collector-transactions.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function CollectorTransactionsViewerController($q, BillingService, SettlementService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };

    activate();
    //////////////////////////////////////////////
    function activate() {
      vm.status.busy = true;
      vm.status.loaded = false;
      var promises = [getCollectorTransactions()];
      $q.all(promises)
        .then(function () {})
        .catch(null)
        .finally(function () {
          vm.status.busy = false;
          vm.status.loaded = true;
        });
    }

    function getCollectorTransactions() {
      //AgendaService.getCollectorTransactions();
      //vm.transactions =  AgendaService.getCollectorTransactions;
    }
  }
})();
