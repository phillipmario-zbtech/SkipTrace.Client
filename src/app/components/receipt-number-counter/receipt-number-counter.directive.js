(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .directive('receiptNumberCounter', receiptNumberCounter);

  receiptNumberCounter.$inject = ['$q'];

  function receiptNumberCounter($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: ReceiptNumberCounterController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/receipt-number-counter/receipt-number-counter.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function ReceiptNumberCounterController() {
    var vm = this;
    vm.nextReceiptNo = 1224231;
  }
})();
