(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('unclearedSalePaymentsViewer', unclearedSalePaymentsViewer);

  unclearedSalePaymentsViewer.$inject = ['SettlementService', '$q', 'logger'];

  function unclearedSalePaymentsViewer() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: UnclearedSalePaymentsController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/financials-manager/uncleared-sale-payments/uncleared-sale-payments.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function UnclearedSalePaymentsController(SettlementService, $q, logger) {
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
    vm.clearAllPayments = clearAllPayments;
    vm.clearPayment = clearPayment;
    vm.cancelPayment = cancelPayment;
    vm.printPayment = printPayment;

    vm.payments = SettlementService.unclearedSalePayments;

    activate();

    function activate() {
      var promises = [getPayments()];
      $q.all(promises)
        .then(function () {
          logger.log('Loaded Uncleared Sale Payments');
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
      vm.canClear = vm.payments.length
      vm.isAllSelected = vm.payments.every(function (payment) {
        return payment.selected;
      })
    }
    //////////// toggle ////////////
    function getPayments() {
      SettlementService.getUnclearedSalePayments()
        .then(function () {
          vm.payments = SettlementService.unclearedSalePayments;
          angular.forEach(vm.payments, function (payment) {
            payment.selected = false;
          });
          vm.isAllSelected = false;
        })
        .catch(null)
        .finally(null);
    }

    function clearAllPayments() {
      var oldList = vm.payments;
      vm.payments = [];
      angular.forEach(oldList, function (payment) {
        if (!payment.selected) {
          vm.payments.push(payment);
        } else { 
          clearPayment(payment);
        }
      });
    }

    function cancelPayment(payment) {
      return SettlementService.cancelSalePayment(payment)
        .then(function (data) {})
        .catch()
        .finally();
    }

    function clearPayment(payment) {
      return SettlementService.clearSalePayment(payment)
        .then(function (data) {})
        .catch()
        .finally();
    }

    function printPayment(payment) { 
    }
  }
})();
