(function () {
  'use strict';

  angular
    .module('blocks.alerter')
    .factory('alertService', alertService);

  alertService.inject = ['$timeout', '$rootScope', 'config'];
  /* ngInject */
  function alertService($timeout, $rootScope, config) {
    var service = {
      add: add,
      closeAlert: closeAlert,
      closeAlertIdx: closeAlertIdx,
      clear: clear,
      get: get
    },
      alerts = [];

    // $rootScope.$on("stateChangeStart", function (event, next, current) {
    //   alerts = [];  //Clears all alerts when route is changed
    // });

    return service;


    function add(type, msg) {
      /* switch (type) {
         case 'error':
           text = "";
           break;
         default:
           text = "";
       } */

      var alert = {
        type: type,
        msg: msg,
        close: function () {
          return closeAlert(this);
        }
      };
      $timeout(closeAlert, config.timeout, true, alert);
      return alerts.push(alert);
    }

    function closeAlert(alert) {
      return closeAlertIdx(alerts.indexOf(alert));
    }

    function closeAlertIdx(index) {
      return alerts.splice(index, 1);
    }

    function clear() {
      alerts = [];
    }

    function get() {
      return alerts;
    }
  }
})();