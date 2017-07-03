(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('unpostedCollectionPaymentsViewer', unpostedCollectionPaymentsViewer);

  unpostedCollectionPaymentsViewer.$inject = ['SettlementService', '$q', 'logger'];

  function unpostedCollectionPaymentsViewer() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: UnpostedCollectionPaymentsController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/financials-manager/unposted-collection-payments/unposted-collection-payments.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function UnpostedCollectionPaymentsController(SettlementService, $q, logger) {
    var vm = this;
    vm.toggleAll = toggleAll;
    vm.optionToggled = optionToggled;
    vm.paymentView = {
      templateUrl: 'collectionPaymentPopoverSummary.html',
      title: 'Payment Summary'
    };
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.postAllPayments=postAllPayments;
    vm.postPayment = postPayment;
    vm.cancelPayment = cancelPayment;
    vm.printPayment = printPayment;

    vm.payments = SettlementService.unpostedCollectionPayments;

    activate();

    function activate() {
      var promises = [getPayments()];
      $q.all(promises)
        .then(function () {
          logger.log('Loaded Unposted Collection Payments');
        });
    }
    //////////// toggle ////////////
    function toggleAll() {
      var toggleStatus = !vm.isAllSelected;
      angular.forEach(vm.payments, function (payment) {
        payment.selected = !toggleStatus;
      });
    }

    function optionToggled() {
      vm.canPost = vm.payments.length
      vm.isAllSelected = vm.payments.every(function (payment) {
        return payment.selected;
      })
    }
    //////////// toggle ////////////
    function getPayments() {
      SettlementService.getUnpostedCollectionPayments()
        .then(function () {
          vm.payments = SettlementService.unpostedCollectionPayments;
          angular.forEach(vm.payments, function (payment) {
            payment.selected = false;
          });
          vm.isAllSelected = false;
        })
        .catch(null)
        .finally(null);
    }

    function postAllPayments() {
      var oldList = vm.payments;
      vm.payments = [];
      angular.forEach(oldList, function (payment) {
        if (!payment.selected) {
          vm.payments.push(payment);
        } else { 
          postPayment(payment);
        }
      });
    }

    function cancelPayment(payment) {
      return SettlementService.cancelCollectionPayment(payment)
        .then(function (data) {})
        .catch()
        .finally();
    }

    function postPayment(payment) {
      return SettlementService.postCollectionPayment(payment)
        .then(function (data) {})
        .catch()
        .finally();
    }

    function printPayment(payment) { 
    }
  }
})();
