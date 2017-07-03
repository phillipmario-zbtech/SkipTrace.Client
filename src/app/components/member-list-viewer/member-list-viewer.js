(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('memberListViewer', memberListViewer);

  memberListViewer.inject = ['config'];
  /* @ngInject */
  function memberListViewer(config) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      //bindToController: true,
      //controller: MemberListViewerController,
      //controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
        members: '='
      },
      templateUrl: 'app/components/member-list-viewer/member-list-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
      // write your code here		
      scope.defaults = {
        members: []
      }; // end defaults 
      scope.itemsPerPage = 10;//config.paging.pagesize;
      scope.currentPage = 0;

      scope.range = function () {
        var rangeSize = 10;//config.paging.pagesize;;
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
        return Math.ceil(scope.members.length / scope.membersPerPage) - 1;
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
  function MemberListViewerController() {

  }
})();