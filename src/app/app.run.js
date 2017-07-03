(function () {
  'use strict';

  angular
    .module('skiptrace')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state) {
    $rootScope.$state = $state; 
    $log.debug('SkipTrace Started'); 
  }

})();
