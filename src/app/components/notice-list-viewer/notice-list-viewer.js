(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('noticeListViewer', noticeListViewer);

  noticeListViewer.inject = ['$q'];
  function noticeListViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: NoticeListViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      }, 
      templateUrl:'app/components/notice-list-viewer/notice-list-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function NoticeListViewerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
  }
})();