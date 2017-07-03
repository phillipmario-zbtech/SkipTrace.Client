(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('zoneList', zoneList);

  zoneList.$inject = ['$q'];

  function zoneList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        zones: '='
      },
      controller: ZoneListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/zone-list/zone-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function ZoneListController() {
    var vm = this;
    vm.zone = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addZone = addZone;
    vm.deleteZone = deleteZone;

    function addZone() {
      var zone = angular.copy(vm.zone);
      vm.zones.push(zone);
      vm.zone = {};
    }

    function deleteZone(zone) {
      var index = vm.zones.indexOf(zone);
      return vm.zones.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
