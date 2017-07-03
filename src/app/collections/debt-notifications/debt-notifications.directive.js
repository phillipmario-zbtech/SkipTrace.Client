(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtNotificationsViewer', debtNotificationsViewer);

  debtNotificationsViewer.$inject = ['$q', 'LiabilityService'];

  function debtNotificationsViewer($q, LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        notifications: '='
      },
      controller: DebtNotificationsViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/debt-notifications/debt-notifications.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtNotificationsViewerController($q, LiabilityService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };

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
