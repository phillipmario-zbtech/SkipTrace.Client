(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .directive('recoveryStatistics', recoveryStatistics);

  recoveryStatistics.$inject = ['$q'];

  function recoveryStatistics($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: RecoveryStatisticsController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {},
      templateUrl: 'app/dashboard/recovery-statistics/recovery-statistics.html'

    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function RecoveryStatisticsController() {
    var vm = this;
    vm.title = 'Recovery Performance';

    vm.renewalDate = {
      startDate: moment(),
      endDate: moment()
    };


    vm.options = {
      chart: {
        type: 'multiBarChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 45,
          left: 45
        },
        clipEdge: true,
        //staggerLabels: true,
        duration: 500,
        stacked: true,
        xAxis: {
          axisLabel: 'Business Year',
          showMaxMin: false,
          tickFormat: function (d) {
            return d3.format(',f')(d);
          }
        },
        yAxis: {
          axisLabel: 'Currency',
          axisLabelDistance: -20,
          tickFormat: function (d) {
            return d3.format(',.1f')(d);
          }
        }
      }
    };

    vm.data = generateData(); 

    /* Random Data Generator (took from nvd3.org) */
    function generateData() {
      return stream_layers(3, 50 + Math.random() * 50, .1).map(function (data, i) {
        return {
          key: 'Stream' + i,
          values: data
        };
      });
    }

    /* Inspired by Lee Byron's test data generator. */
    function stream_layers(n, m, o) {
      if (arguments.length < 3) o = 0;

      function bump(a) {
        var x = 1 / (.1 + Math.random()),
          y = 2 * Math.random() - .5,
          z = 10 / (.1 + Math.random());
        for (var i = 0; i < m; i++) {
          var w = (i / m - y) * z;
          a[i] += x * Math.exp(-w * w);
        }
      }
      return d3.range(n).map(function () {
        var a = [],
          i;
        for (i = 0; i < m; i++) a[i] = o + o * Math.random();
        for (i = 0; i < 5; i++) bump(a);
        return a.map(stream_index);
      });
    }

    /* Another layer generator using gamma distributions. */
    function stream_waves(n, m) {
      return d3.range(n).map(function (i) {
        return d3.range(m).map(function (j) {
          var x = 20 * j / m - i / 3;
          return 2 * x * Math.exp(-.5 * x);
        }).map(stream_index);
      });
    }

    function stream_index(d, i) {
      return {
        x: i,
        y: Math.max(0, d)
      };
    }


  }
})();
