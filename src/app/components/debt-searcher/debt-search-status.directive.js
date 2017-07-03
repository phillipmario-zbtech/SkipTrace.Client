(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtSearchStatus', debtSearchStatus);

  debtSearchStatus.inject = ['SubscriberService'];
  function debtSearchStatus(SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = { 
      controller: DebtSearchStatusController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {
        filters: '=',
        debts: '=',
        searchStatus: '='
      },
      templateUrl: 'app/components/debt-searcher/debt-search-status.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function DebtSearchStatusController() {

  }
})();