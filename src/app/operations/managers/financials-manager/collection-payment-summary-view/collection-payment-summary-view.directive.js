(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('collectionPaymentSummaryView', collectionPaymentSummaryView);

  collectionPaymentSummaryView.$inject = ['SettlementService'];

  function collectionPaymentSummaryView() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        payment: '='
      },
      controller: CollectionPaymentSummaryViewController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/financials-manager/collection-payment-summary-view/collection-payment-summary-view.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function CollectionPaymentSummaryViewController(SettlementService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.paymentView = {
      templateUrl: 'collectionPaymentPopoverSummary.html',
      title: 'Payment Summary'
    };
  }
})();
