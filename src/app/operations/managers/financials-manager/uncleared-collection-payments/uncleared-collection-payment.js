(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('unclearedCollectionPaymentsViewer', unclearedCollectionPaymentsViewer);

  unclearedCollectionPaymentsViewer.$inject = ['SettlementService', '$q', 'logger'];

  function unclearedCollectionPaymentsViewer() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: UnclearedCollectionPaymentsController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/financials-manager/uncleared-collection-payments/uncleared-collection-payments.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function UnclearedCollectionPaymentsController(SettlementService, $q, logger) {
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
    vm.clearAllPayments = clearAllPayments;
    vm.clearPayment = clearPayment;
    vm.cancelPayment = cancelPayment;
    vm.printPayment = printPayment;

    vm.payments = SettlementService.unclearedCollectionPayments;

    activate();

    function activate() {
      var promises = [getPayments()];
      $q.all(promises)
        .then(function () {
          logger.log('Loaded Uncleared Collection Payments');
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
      vm.canClear = vm.payments.length;
      vm.isAllSelected = vm.payments.every(function (payment) {
        return payment.selected;
      })
    }
    //////////// toggle ////////////

    function getPayments() {
      SettlementService.getUnclearedCollectionPayments()
        .then(function () {
          vm.payments = SettlementService.unclearedCollectionPayments;
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
      return SettlementService.cancelCollectionPayment(payment)
        .then(function (data) {})
        .catch()
        .finally();
    }

    function clearPayment(payment) {
      return SettlementService.clearCollectionPayment(payment)
        .then(function (data) {})
        .catch()
        .finally();
    }

    function printPayment(payment) { 
    }
  }
})();
