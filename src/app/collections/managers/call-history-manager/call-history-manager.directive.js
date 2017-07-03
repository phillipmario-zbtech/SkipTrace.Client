(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .directive('callHistoryManager', callHistoryManager);

  callHistoryManager.$inject = ['collectionsState', '$q', 'LiabilityService'];

  function callHistoryManager(collectionsStat, $q, LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: CallHistoryManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/managers/call-history-manager/call-history-manager.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function CallHistoryManagerController($q, LiabilityService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };

    activate();
    //////////////////////////////////////////////
    function activate() {
      vm.status.busy = true;
      vm.status.loaded = false;
      var promises = [getCollectorPosts()];
      $q.all(promises)
        .then(function () {})
        .catch(null)
        .finally(function () {
          vm.status.busy = false;
          vm.status.loaded = true;
        });
    }

    function getCollectorPosts() {
      //LiabilityService.getCollectorPosts();
      //vm.posts = LiabilityService.getCollectorPosts;
    }

  }
})();
