(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('memberAddressList', memberAddressList);

  memberAddressList.$inject = ['$q'];

  function memberAddressList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        memberAddresses: '='
      },
      controller: MemberAddressListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/memberAddress-list/memberAddress-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function MemberAddressListController() {
    var vm = this;
    vm.memberAddress = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addMemberAddress = addMemberAddress;
    vm.deleteMemberAddress = deleteMemberAddress;

    function addMemberAddress() {
      var memberAddress = angular.copy(vm.memberAddress);
      vm.memberAddresses.push(memberAddress);
      vm.memberAddress = {};
    }

    function deleteMemberAddress(memberAddress) {
      var index = vm.memberAddresses.indexOf(memberAddress);
      return vm.memberAddresses.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
