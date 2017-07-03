(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('alerter', alerter);

  alerter.inject = ['alertService'];
  /* @ngInject */
  function alerter(alertService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {  
      link: link,
      restrict: 'EA',
      scope: {
        alertType: '@?'
      },
      templateUrl: 'app/components/alerter/alerter.html'
    };
    return directive;

    function link(scope, element, attrs) {
      scope.alertService = alertService;
    }
  } 
})();