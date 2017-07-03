(function () {
  'use strict';

  angular.module('skiptrace.operations', [
      'bm.uiTour'
    ])
    .value('operationsState', {})
    .run(['uiTourService', function (uiTourService) {
      uiTourService.createDetachedTour('operationsTour', {
        backdrop: true
      });
    }]);
})();
