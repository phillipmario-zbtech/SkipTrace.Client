(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('aliasList', aliasList);

  aliasList.$inject = ['$q'];

  function aliasList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        aliases: '='
      },
      controller: AliasListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/alias-list/alias-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function AliasListController() {
    var vm = this;
    vm.alias = {}; 
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addAlias = addAlias;
    vm.deleteAlias = deleteAlias;

    function addAlias() {
      var alias = angular.copy(vm.alias);
      vm.aliases.push(alias);
      vm.alias = {};
    }

    function deleteAlias(alias) {
      var index = vm.aliases.indexOf(alias);
      return vm.aliases.splice(index, 1);
    }
    
    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
