(function () {
  'use strict';

  angular.module('skiptrace.collections', [
      'bm.uiTour'
    ])
    .value('collectionsState', {})
    .run(['uiTourService', 'LiabilityService', function (uiTourService, LiabilityService) {
      LiabilityService.init();
      uiTourService.createDetachedTour('collectionsTour', {
        backdrop: true
      });
    }]);
})();
