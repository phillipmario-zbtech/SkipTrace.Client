(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .directive('renewalNotices', renewalNotices);

  renewalNotices.$inject = ['$q', 'SubscriberService'];

  function renewalNotices($q, SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller:  RenewalNoticesController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/members/renewal-notices/renewal-notices.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function  RenewalNoticesController($q, SubscriberService) {
    var vm = this;
    vm.title = 'Unassigned Debts';
    vm.ls = SubscriberService;
    vm.assignDebtToCollector = assignDebtToCollector;
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
      var promises = [];
      $q.all(promises)
        .then(function () {})
        .catch(null)
        .finally(function () {
          vm.status.busy = false;
          vm.status.loaded = true;
        });
    }

    function getRenewalNotices() {
      SubscriberService.getRenewalNotices();
      vm.notices = SubscriberService.getRenewalNotices;
    }

    function assignDebtToCollector(notice) {
      return SubscriberService.openAssignDebtToCollectorDialog(notice.id)
        .then()
        .catch()
        .finally();

    }
  }

})();
