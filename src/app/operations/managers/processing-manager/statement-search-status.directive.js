(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('statementSearchStatus', statementSearchStatus);

  statementSearchStatus.inject = ['SubscriberService'];
  function statementSearchStatus(SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = { 
      controller: StatementSearchStatusController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {
        filters: '=',
        statements: '=',
        searchStatus: '='
      },
      templateUrl: 'app/operations/processing-manager/statement-search-status.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function StatementSearchStatusController() {

  }
})();