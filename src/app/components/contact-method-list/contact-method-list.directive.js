(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('contactMethodList', contactMethodList);

  contactMethodList.$inject = ['$q'];

  function contactMethodList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        contactMethods: '='
      },
      controller: ContactMethodListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/contact-method-list/contact-method-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function ContactMethodListController() {
    var vm = this;
    vm.contactMethod = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addContactMethod = addContactMethod;
    vm.deleteContactMethod = deleteContactMethod;

    function addContactMethod() {
      var contactMethod = angular.copy(vm.contactMethod);
      vm.contactMethods.push(contactMethod);
      vm.contactMethod = {};
    }

    function deleteContactMethod(contactMethod) {
      var index = vm.contactMethods.indexOf(contactMethod);
      return vm.contactMethods.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
