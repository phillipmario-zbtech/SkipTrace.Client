(function () {
  'use strict';

  angular
    .module('skiptrace.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'logger', 'guardSvc', 'userSvc', '$timeout', '$settings'];
  /* @ngInject */
  function DashboardController($q, logger, guardSvc, userSvc, $timeout, $settings) {
    var vm = this;
    vm.guardSvc = guardSvc;
    vm.userSvc = userSvc;
    vm.news = {
      title: 'st',
      description: 'skiptrace.'
    };
    vm.user = userSvc.info;
    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'Dashboard';
    vm.test = 'asfSfcScfASDAxdAXdsAxdAxdSCAsxZXZxcCDAxdAXdsAxdAxdSCAsxZXZxcCDAxdAXdsAxdAxdSCAsxZXZxcCDAxdAXdsAxdAxdSCAsxZXZxcCDAxdAXdsAxdAxdSCAsxZXZxcCDAxdAXdsAxdAxdSCAsxZXZxcCdAsdsfd',
      vm.date = {
        startDate: moment().subtract(1, "days"),
        endDate: moment()
      };

    activate();

    function activate() { 
      var promises = [];
      return $q.all(promises).then(function () {
        logger.info('Activated Dashboard Module');
      });
    }

    vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
    vm.series = ['Series A', 'Series B'];
    vm.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    vm.onClick = function (points, evt) {};

    // Simulate async data update
    $timeout(function () {
      vm.data = [
        [28, 48, 40, 19, 86, 27, 90],
        [65, 59, 80, 81, 56, 55, 40]
      ];
    }, 3000);
  }
})();
