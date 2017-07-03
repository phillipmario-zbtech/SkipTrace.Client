(function () {
  'use strict';

  angular.module('skiptrace.dashboard', [
      'bm.uiTour'
    ])
    .value('dashboardState', {})
    .run(['uiTourService', function (uiTourService) {
      uiTourService.createDetachedTour('dashboardTour', {
        backdrop: true
      });
    }]);
})();
