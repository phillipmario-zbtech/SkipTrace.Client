(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('unverifiedCollectionPaymentsViewer', unverifiedCollectionPaymentsViewer);

  unverifiedCollectionPaymentsViewer.$inject = ['SettlementService', '$q', 'logger'];

  function unverifiedCollectionPaymentsViewer() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: UnverifiedCollectionPaymentsController,
      controllerAs: 'vm',
      //link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/financials-manager/unverified-collection-payments/unverified-collection-payments.html'
    };
    return directive;

    //function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function UnverifiedCollectionPaymentsController(SettlementService, $q, logger) {
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
    vm.verifyAllPayments=verifyAllPayments;
    vm.cancelPayment = cancelPayment;
    vm.verifyPayment = verifyPayment;
    vm.printPayment = printPayment;

    vm.payments = SettlementService.unverifiedCollectionPayments;

    activate();

    function activate() {
      var promises = [getPayments()];
      $q.all(promises)
        .then(function () {
          logger.log('Loaded Unverified Collection Payments');
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
      vm.canVerify = vm.payments.length
      vm.isAllSelected = vm.payments.every(function (payment) {
        return payment.selected;
      })
    }
    //////////// toggle ////////////
    function getPayments() {
      SettlementService.getUnverifiedCollectionPayments()
        .then(function () {
          vm.payments = SettlementService.unverifiedCollectionPayments;
          angular.forEach(vm.payments, function (payment) {
            payment.selected = false;
          });
          vm.isAllSelected = false;
        })
        .catch(null)
        .finally(null);
    }

    function verifyAllPayments() {
      var oldList = vm.payments;
      vm.payments = [];
      angular.forEach(oldList, function (payment) {
        if (!payment.selected) {
          vm.payments.push(payment);
        } else { 
          verifyPayment(payment); 
        }
      });
    }
    
    function cancelPayment(payment) {
      return SettlementService.cancelCollectionPayment(payment)
        .then(function () {
          vm.payments = SettlementService.unverifiedCollectionPayments;;
        })
        .catch()
        .finally();
    }

    function verifyPayment(payment) {
      return SettlementService.verifyCollectionPayment(payment)
        .then(function () {
          vm.payments = SettlementService.unverifiedCollectionPayments;;
        })
        .catch()
        .finally();
    }

    function printPayment(payment) { 
    }
  }
})();
