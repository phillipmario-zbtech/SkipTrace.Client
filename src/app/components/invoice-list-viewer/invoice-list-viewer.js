(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('invoiceListViewer', invoiceListViewer);

  invoiceListViewer.inject = ['$q'];
  function invoiceListViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: InvoiceListViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      }, 
      templateUrl:'app/components/invoice-list-viewer/invoice-list-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function InvoiceListViewerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
  }
})();