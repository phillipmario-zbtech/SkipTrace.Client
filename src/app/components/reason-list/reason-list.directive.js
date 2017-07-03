(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('reasonList', reasonList);

  reasonList.$inject = ['$q'];

  function reasonList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        reasons: '='
      },
      controller: ReasonListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/reason-list/reason-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function ReasonListController() {
    var vm = this;
    vm.reason = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addReason = addReason;
    vm.deleteReason = deleteReason;

    function addReason() {
      var reason = angular.copy(vm.reason);
      vm.reasons.push(reason);
      vm.reason = {};
    }

    function deleteReason(reason) {
      var index = vm.reasons.indexOf(reason);
      return vm.reasons.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
