(function () {
  'use strict';

  angular
    .module('skiptrace')
    .directive('suspendedMembers', suspendedMembers);

  suspendedMembers.$inject = ['$q', 'SubscriberService'];

  function suspendedMembers($q, SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: SuspendedMembersController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/members/suspended-members/suspended-members.html'

    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function SuspendedMembersController($q, SubscriberService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.members = [];
    vm.restartMembership = restartMembership;

    activate();
    //////////////////////////////////////////////
    function activate() {
      vm.status.busy = true;
      vm.status.loaded = false;
      var promises = [getSuspendedMembers()];
      $q.all(promises)
        .then(function () {})
        .catch(null)
        .finally(function () {
          vm.status.busy = false;
          vm.status.loaded = true;
        });
    }

    function getSuspendedMembers() {
      SubscriberService.getSuspendedMembers();
      vm.members = SubscriberService.suspendedMembers;
    }

    function restartMembership(member) {
      var index = vm.members.indexOf(member);
      vm.members.splice(index, 1);
    }

  }
})();
