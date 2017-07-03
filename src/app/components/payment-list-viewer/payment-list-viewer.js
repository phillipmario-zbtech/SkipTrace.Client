(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('paymentListViewer', paymentListViewer);

  paymentListViewer.inject = ['$q'];
  function paymentListViewer($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: PaymentListViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      }, 
      templateUrl:'app/components/payment-list-viewer/payment-list-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function PaymentListViewerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
  }
})();