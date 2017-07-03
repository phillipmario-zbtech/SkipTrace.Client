(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('referenceList', referenceList);

  referenceList.$inject = ['$q'];

  function referenceList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController:{
        references: '='
      },
      controller: ReferenceListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/reference-list/reference-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function ReferenceListController() {
    var vm = this;
    vm.reference = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addReference = addReference;
    vm.deleteReference = deleteReference;

    function addReference() {
      var reference = angular.copy(vm.reference);
      vm.references.push(reference);
      vm.reference = {};
    }

    function deleteReference(reference) {
      var index = vm.references.indexOf(reference);
      return vm.references.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
