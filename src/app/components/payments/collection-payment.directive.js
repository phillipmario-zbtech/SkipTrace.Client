(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .directive('collectionPayment', collectionPayment);

  collectionPayment.$inject = ['lookupService'];

  function collectionPayment(lookupService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: CollectionPaymentController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/payments/collection-payment.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function CollectionPaymentController() {

  }
})();
