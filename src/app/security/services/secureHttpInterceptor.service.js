(function () {
  'use strict'; 

  angular.module('skiptrace.security')
    .factory('secureHttpInterceptor', secureHttpInterceptor);

  secureHttpInterceptor.inject = ['storageSvc'];
    /* @ngInject */
  function secureHttpInterceptor(storageSvc) {
    var interceptor = {
      request: request
    }; 
    return interceptor; 
    function request(config) {
      var token = storageSvc.retrieve("accessToken");
      if (token) {
        config.headers['Authorization'] = "Bearer " + token;
      }
      return config;
    }
  }
})();