(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('territoryList', territoryList);

  territoryList.$inject = ['$q'];

  function territoryList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        territories: '='
      },
      controller: TerritoryListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/territory-list/territory-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function TerritoryListController() {
    var vm = this;
    vm.territory = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addTerritory = addTerritory;
    vm.deleteTerritory = deleteTerritory;

    function addTerritory() {
      var territory = angular.copy(vm.territory);
      vm.territories.push(territory);
      vm.territory = {};
    }

    function deleteTerritory(territory) {
      var index = vm.territories.indexOf(territory);
      return vm.territories.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
