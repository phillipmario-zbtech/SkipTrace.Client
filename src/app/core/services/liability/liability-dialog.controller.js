(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('LiabilityDialogController', LiabilityDialogController);

  LiabilityDialogController.inject = ['member', '$q', 'lookupService', 'PricingService', 'LiabilityService', '$uibModalInstance'];
  /* @ngInject */
  function LiabilityDialogController(member, $q, lookupService, PricingService, LiabilityService, $uibModalInstance) {
    var vm = this;
    vm.title = 'Register Debt';
    vm.ok = ok;
    vm.cancel = cancel;
    vm.member = member;
    vm.countries = [];
    vm.zones = [];
    vm.request = {
      debt: {},
      debtors: []
    }

    vm.getCharges = getCharges;
    vm.debtor = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;
    vm.addDebtor = addDebtor;
    vm.deleteDebtor = deleteDebtor;


    activate();

    ////////////////
    function activate() {

      var promises = [getCollectors(), getZones(), getCountries()];
      $q.all(promises)
        .then(function () {
          //log('Activated Members');
        });
    }

    function getCharges() {
      PricingService
        .calculateCollectionPaymentCharges(vm.payment)
        .then(function (data) {
          vm.charges = data
        })
        .catch()
        .finally();
    }

    function ok() {
      $uibModalInstance.close(vm.request);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function getCollectors() {
      return lookupService.getCollectors()
        .then(function (data) {
          vm.collectors = data;
        })
    }

    function getCountries() {
      return lookupService.getCountries()
        .then(function (data) {
          vm.countries = data;
        });
    }

    function getZones() {
      return lookupService.getZones()
        .then(function (data) {
          vm.zones = data;
        });
    }


    function addDebtor() {
      var debtor = angular.copy(vm.debtor);
      vm.request.debtors.push(debtor);
      vm.debtor = {};
    }

    function deleteDebtor(debtor) {
      var index = vm.request.debtors.indexOf(debtor);
      return vm.request.debtors.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
