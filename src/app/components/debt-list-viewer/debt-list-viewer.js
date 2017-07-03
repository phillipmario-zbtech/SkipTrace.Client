(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtListViewer', debtListViewer);

  debtListViewer.inject = ['config'];
  /* @ngInject */
  function debtListViewer(config) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      //bindToController: true,
      //controller: DebtListViewerController,
      //controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
        debts: '='
      },
      templateUrl: 'app/components/debt-list-viewer/debt-list-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
      // write your code here		
      scope.defaults = {
        debts: []
      }; // end defaults 
      scope.itemsPerPage = config.paging.pagesize;
      scope.currentPage = 0;

      scope.range = function () {
        var rangeSize = config.paging.pagesize;;
        var ret = [];
        var start;
        start = scope.currentPage;
        if (start > scope.pageCount() - rangeSize) {
          start = scope.pageCount() - rangeSize + 1;
        }
        for (var i = start; i < start + rangeSize; i++) {
          ret.push(i);
        } 
        return ret;
      };

      scope.prevPage = function () {
        if (scope.currentPage > 0) {
          scope.currentPage--;
        }
      };

      scope.prevPageDisabled = function () {
        return scope.currentPage === 0 ? "disabled" : "";
      };
      scope.pageCount = function () {
        return Math.ceil(scope.debts.length / scope.debtsPerPage) - 1;
      };
      scope.nextPage = function () {
        if (scope.currentPage < scope.pageCount()) {
          scope.currentPage++;
        }
      };
      scope.nextPageDisabled = function () {
        return scope.currentPage === scope.pageCount() ? "disabled" : "";
      };
      scope.setPage = function (n) {
        scope.currentPage = n;
      };
    }
  }
  /* @ngInject */
  function DebtListViewerController() {

  }
})();