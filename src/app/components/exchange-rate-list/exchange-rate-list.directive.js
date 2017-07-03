(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('exchangeRateList', exchangeRateList);

  exchangeRateList.$inject = ['$q'];

  function exchangeRateList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        exchangeRates: '='
      },
      controller: ExchangeRateListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/exchangeRate-list/exchangeRate-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function ExchangeRateListController() {
    var vm = this;
    vm.exchangeRate = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addExchangeRate = addExchangeRate;
    vm.deleteExchangeRate = deleteExchangeRate;

    function addExchangeRate() {
      var exchangeRate = angular.copy(vm.exchangeRate);
      vm.exchangeRates.push(exchangeRate);
      vm.exchangeRate = {};
    }

    function deleteExchangeRate(exchangeRate) {
      var index = vm.exchangeRates.indexOf(exchangeRate);
      return vm.exchangeRates.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
