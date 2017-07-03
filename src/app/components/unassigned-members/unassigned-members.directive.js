(function () {
  'use strict';

  angular
    .module('skiptrace')
    .directive('unassignedMembers', unassignedMembers);

  unassignedMembers.$inject = ['SubscriberService'];

  function unassignedMembers(SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: UnassignedMembersController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/unassigned-members/unassigned-members.html'

    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function UnassignedMembersController(SubscriberService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    var members = [];
    activate();
    //////////////////////////////////////////////
    function activate() {
      vm.status.loaded = true;
      var promises = [];
      $q.all(promises)
        .then(function () {})
        .catch(null)
        .finally(function () {
          vm.status.loaded = false;
        });
    }

  }
})();
