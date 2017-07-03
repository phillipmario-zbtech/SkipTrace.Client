(function() {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('StatisticsService', StatisticsService);

  StatisticsService.$inject = ['$resource','$settings'];
  /* ngInject */
  function StatisticsService($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    
    return $resource(baseUrl + '/api/pricing/:id',
      { id: "@id" }, //null
      {
        'debt': { method: 'POST', url: baseUrl + '/api/pricing/debt' },
        'collectionpayment': { method: 'POST', url: baseUrl + '/api/pricing/collectionpayment' },
        'salepayment': { method: 'POST', url: baseUrl + '/api/pricing/salepayment' },
        'collectioninvoice': { method: 'POST', url: baseUrl + '/api/pricing/collectioninvoice' },
        'saleinvoice': { method: 'POST', url: baseUrl + '/api/pricing/saleinvoice' }
      }
    );
  }
})();
