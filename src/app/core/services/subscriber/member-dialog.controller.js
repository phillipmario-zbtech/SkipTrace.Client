(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('MemberDialogController', MemberDialogController);

  MemberDialogController.inject = ['$q', '$uibModalInstance', 'lookupService', 'ConfigurationService'];
  /* ngInject */
  function MemberDialogController($q, $uibModalInstance, lookupService, ConfigurationService) {
    var vm = this;
    vm.application = {
      member: {},
      subscription: {},
      associate: {},
      address: {}
    };
    vm.contractDates = {
      startDate: moment(),
      endDate: moment()
    };
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Configure Membership';
    vm.countries = [];
    vm.products = [];
    vm.sectors = [];
    vm.agents = [];
    vm.getCountryOptions = getCountryOptions;
    vm.getProductOptions = getProductOptions;

    vm.hasProducts = function () {
      return (vm.products.length > 0)
    };
    vm.hasAgents = function () {
      return (vm.agents.length > 0)
    }
    activate();

    ////////////////

    function activate() {
      var promises = [getCountries(), getSectors()];
      $q.all(promises)
        .then(function () {
          //log('Activated Members');
        });
    }

    function ok() {
      $uibModalInstance.close(vm.application);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function getCountries() {
      return lookupService.getCountries()
        .then(function (data) {
          vm.countries = data;
        });
    }

    function getCountryOptions(country) {
      var promises = [getProducts(country), getAgents(country)];
      $q.all(promises)
        .then(function () {
          //log('Activated Members');
        });

      return lookupService.getCountryProducts({
          countryId: country
        })
        .then(function (data) {
          vm.products = data;
        })
    }

    function getProducts(country) {
      return lookupService.getCountryProducts({
          countryId: country
        })
        .then(function (data) {
          vm.products = data;
        })
    }

    function getAgents(country) {
      return lookupService.getCountryAgents({
          countryId: country
        })
        .then(function (data) {
          vm.agents = data;
        })
    }

    function getProductOptions(product) {
      return ConfigurationService.getProduct({
          id: product
        })
        .then(function (data) {
          vm.application.subscription.calculateInterest = data.allowInterest;
          vm.application.subscription.calculateAdministrativeFee = data.allowAdministrativeFee;
          vm.application.subscription.calculateLegalFee = data.allowLegalFee;
          vm.application.subscription.calculateTax = data.allowTax;
          vm.application.subscription.calculateCommission = data.allowCommission;
          //fix the aallowed dates
          vm.contractDates = {
            startDate: moment(),
            endDate: moment().add('months', data.subscriptionLength).add('days', -1)
          };
          vm.application.subscription.contractDate = vm.contractDates.startDate;
          vm.application.subscription.renewalDates = vm.contractDates.endDate;

        })
        .catch(null)
        .finally(null);
    }

    function getSectors() {
      return lookupService.getSectors()
        .then(function (data) {
          vm.sectors = data;
        });
    }

  }
})();
