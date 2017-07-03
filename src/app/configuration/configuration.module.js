(function () {
  'use strict';

  angular.module('skiptrace.configuration', [
      'bm.uiTour'
    ])
    .value('configurationState', {})
    .run(['uiTourService', function (uiTourService) {
      uiTourService.createDetachedTour('configurationTour', {
        backdrop: true
      });
    }]);
})();
