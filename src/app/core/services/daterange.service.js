(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('dateRangeService', dateRangeService);

  dateRangeService.inject = ['$q', '$resource'];
  /* ngInject */
  function dateRangeService($q, $resource) {
    var service = {
      getProcessingDateRange: getProcessingDateRange
    };

    return service;

    ////////////////
    function getProcessingDateRange() { return $q.when(100); }
  }
})();