(function () {
  'use strict';

  angular
    .module('skiptrace.security')
    .config(securityConfig)

  securityConfig.inject = ['$httpProvider'];
    /* @ngInject */
  function securityConfig($stateProvider, $httpProvider) {
    $httpProvider.interceptors.push('secureHttpInterceptor'); 
  }
})();
