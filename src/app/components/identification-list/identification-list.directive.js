(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('identificationList', identificationList);

  identificationList.$inject = ['$q'];

  function identificationList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        identifications: '='
      },
      controller: IdentificationListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/identification-list/identification-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function IdentificationListController() {
    var vm = this;
    vm.identification = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addIdentification = addIdentification;
    vm.deleteIdentification = deleteIdentification;

    function addIdentification() {
      var identification = angular.copy(vm.identification);
      vm.identifications.push(identification);
      vm.identification = {};
    }

    function deleteIdentification(identification) {
      var index = vm.identifications.indexOf(identification);
      return vm.identifications.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
