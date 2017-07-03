(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('unpostedSalePaymentsViewer', unpostedSalePaymentsViewer);

  unpostedSalePaymentsViewer.$inject = ['SettlementService', '$', 'logger'];

  function unpostedSalePaymentsViewer() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: UnpostedSalePaymentsController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/financials-manager/unposted-sale-payments/unposted-sale-payments.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function UnpostedSalePaymentsController(SettlementService, $q, logger) {
    var vm = this;
    vm.toggleAll = toggleAll;
    vm.optionToggled = optionToggled;
    vm.paymentView = {
      templateUrl: 'salePaymentPopoverSummary.html',
      title: 'Payment Summary'
    };
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.postAllPayments = postAllPayments;
    vm.postPayment = postPayment;
    vm.cancelPayment = cancelPayment;
    vm.printPayment = printPayment;

    vm.payments = SettlementService.unpostedSalePayments;

    activate();

    function activate() {
      var promises = [getPayments()];
      $q.all(promises)
        .then(function () {
          logger.log('Loaded Unposted Sale Payments');
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
      SettlementService.getUnpostedSalePayments()
        .then(function () {
          vm.payments = SettlementService.unpostedSalePayments;
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
      return SettlementService.cancelSalePayment(payment)
        .then(function (data) {})
        .catch()
        .finally();
    }

    function postPayment(payment) {
      return SettlementService.postSalePayment(payment)
        .then(function (data) {})
        .catch()
        .finally();
    }

    function printPayment(payment) { 
    }
  }
})();
