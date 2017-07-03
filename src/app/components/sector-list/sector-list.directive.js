(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('sectorList', sectorList);

  sectorList.$inject = ['$q'];

  function sectorList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        sectors: '='
      },
      controller: SectorListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/sector-list/sector-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function SectorListController() {
    var vm = this;
    vm.sector = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addSector = addSector;
    vm.deleteSector = deleteSector;

    function addSector() {
      var sector = angular.copy(vm.sector);
      vm.sectors.push(sector);
      vm.sector = {};
    }

    function deleteSector(sector) {
      var index = vm.sectors.indexOf(sector);
      return vm.sectors.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
