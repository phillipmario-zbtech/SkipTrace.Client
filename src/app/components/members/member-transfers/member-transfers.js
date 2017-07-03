(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('memberTransferManager', memberTransferManager);

  memberTransferManager.inject = ['$q', 'SubscriberService'];

  function memberTransferManager($q, SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: MemberTransferManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/members/member-transfers/member-transfers.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function MemberTransferManagerController($q, SubscriberService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.canTransfer = false;
    vm.getAgentMembers = getAgentMembers;
    vm.sourceAgents = [];
    vm.targetAgents = [];
    vm.members = [];
    vm.sourceAgent = 0;
    vm.targetAgent = 0;
    vm.toggleAll = toggleAll;
    vm.optionToggled = optionToggled;
    vm.reassignMembers = reassignMembers;
    vm.isChecked = function () {
      for (var e in vm.members) {
        var checkBox = vm.members[e];
        if (checkBox.selected && vm.targetAgent)
          return true;
      }
      return false;
    };
    activate();
    ////////////////////////////// implementation  /////////////////////////////////
    function activate() {
      var promises = [getSourceAgents()];
      $q.all(promises)
        .then(function () {
          //log('Activated Members');
        });

    }

    function toggleAll() {
      var toggleStatus = !vm.isAllSelected;
      angular.forEach(vm.members, function (itm) {
        itm.selected = !toggleStatus;
      });
    }

    function optionToggled() {
      vm.canTransfer = vm.members.length
      vm.isAllSelected = vm.members.every(function (itm) {
        return itm.selected;
      })
    }

    function getSourceAgents() {
      return SubscriberService.getAgents()
        .then(function (data) {
          vm.sourceAgents = data;
          vm.targetAgents = data;
        })
        .catch(null)
        .finally(null);

    }

    function getTargetAgents() {
      return SubscriberService.getAgents()
        .then(function (data) {
          vm.sourceAgents = data;
        })
        .catch(null)
        .finally(null);
    }

    function getAgentMembers() {
      var id = vm.sourceAgent;
      return SubscriberService.getAgentMembers({
          id: id
        })
        .then(
          function (data) {
            vm.members = data;
            angular.forEach(vm.members, function (itm) {
              itm.selected = true;
            });
            vm.isAllSelected = true;
          }
        )
        .catch(null)
        .finally(function () {
          //
        });
    }

    function reassignMembers() {
      var oldList = vm.members;
      vm.members = [];
      angular.forEach(oldList, function (x) {
        if (!x.selected) {
          vm.members.push(x);
        } else {
          var transferRequest = {
            memberId: x.id,
            agentId: vm.targetAgent
          }
          SubscriberService.transferMember(transferRequest)
        }
      });
    }

  }
})();
