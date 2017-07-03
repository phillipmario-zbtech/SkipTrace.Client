(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('quickDebtPayment', quickDebtPayment);

  quickDebtPayment.inject = ['LiabilityService', 'SettlementService', 'BillingService', 'PricingService'];
  /* @ngInject */
  function quickDebtPayment(LiabilityService, SettlementService, BillingService, PricingService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: QuickDebtPaymentController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/quick-debt-payment/quick-debt-payment.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function QuickDebtPaymentController(LiabilityService, SettlementService, BillingService, PricingService) {
    var vm = this;
    vm.status = {
      processed: false,
      loaded: false,
      busy: false,
      message: ''
    };
    vm.checkDebtExists = LiabilityService.checkDebtExists;
    vm.getDebtBalance = getDebtBalance;
    vm.getAmountCharges = getAmountCharges;
    vm.submitPayment = submitPayment;
    vm.printReceipt = printReceipt;
    //default payment request
    vm.request = {
      debtId: null,
      effectiveDate: moment()
    };
    //default payment response
    vm.charges = {};
    //default payment
    vm.payment = {
      amount: null
    };


    ////Private////
    function getDebtBalance() {
      return LiabilityService.getDebtBalance(vm.request)
        .then(function (response) {
          vm.payment.debtId = vm.request.debtId;
          vm.payment.amount = response.balance;
          getAmountCharges();
        })
        .catch(function (error) { 
        })
        .finally(null);

    }

    function getAmountCharges() {
      PricingService
        .calculateCollectionPaymentCharges(vm.payment)
        .then(function (data) {
          vm.charges = data
        })
        .catch()
        .finally();
    }

    function submitPayment() {
      return SettlementService.submitCollectionPayment(vm.payment)
        .then(function (data) { 
          vm.status.processed = true;
        })
        .catch(function () {
          vm.status.processed = false;
        })
        .finally(function () {
          vm.debtId = "";
          vm.debtResponse = {};
        });
    }

    function printReceipt() { 
      vm.status.processed = false;
      vm.payment = {};
      vm.request = {};
/*
      return PrintService.printReceipt()
        .then(null)
        .catch(null)
        .finally(function () {
          vm.status.processed = true;
        })

*/
    }
  }
})();
