(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('associateList', associateList);

  associateList.$inject = ['$q'];

  function associateList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        associates: '='
      },
      controller: AssociateListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/associate-list/associate-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function AssociateListController() {
    var vm = this;
    vm.associate = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addAssociate = addAssociate;
    vm.deleteAssociate = deleteAssociate;

    function addAssociate() {
      var associate = angular.copy(vm.associate);
      vm.associates.push(associate);
      vm.associate = {};
    }

    function deleteAssociate(associate) {
      var index = vm.associates.indexOf(associate);
      return vm.associates.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
