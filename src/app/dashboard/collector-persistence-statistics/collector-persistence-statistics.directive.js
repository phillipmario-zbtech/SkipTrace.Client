(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .directive('collectorPersistenceStatistics', CollectorPersistenceStatistics);

  CollectorPersistenceStatistics.$inject = ['$q'];

  function CollectorPersistenceStatistics($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: CollectorPersistenceStatisticsController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {},
      templateUrl: 'app/dashboard/collector-persistence-statistics/collector-persistence-statistics.html'

    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function CollectorPersistenceStatisticsController() {
    var vm = this;
    vm.title ='Collector Persistence';


    vm.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function (d) {
          return d.key;
        },
        y: function (d) {
          return d.y;
        },
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };

    vm.data = [{
        key: "Ensurance",
        y: 5
      },
      {
        key: "Portal",
        y: 2
      },
      {
        key: "Three",
        y: 9
      },
      {
        key: "Four",
        y: 7
      },
      {
        key: "Five",
        y: 4
      },
      {
        key: "Six",
        y: 3
      },
      {
        key: "Seven",
        y: .5
      }
    ];

  }
})();
