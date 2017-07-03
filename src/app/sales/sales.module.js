(function () {
  'use strict';

  angular.module('skiptrace.sales', [
      'bm.uiTour'
    ])
    .run(['uiTourService', function (uiTourService) {
      uiTourService.createDetachedTour('salesTour', {
        backdrop: true
      });
    }]);
})();
