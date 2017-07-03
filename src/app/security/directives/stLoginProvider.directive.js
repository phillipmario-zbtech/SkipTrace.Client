(function () {
  'use strict';

  angular.module('skiptrace.security')
    .directive('stLoginProvider', stLoginProvider);

  function stLoginProvider() {
    var directive = {
      restrict: 'A',
      replace: true,
      scope: {
        provider: '=stLoginProvider',
        action: '&'
      },
      templateUrl: 'app/security/directives/stLoginProvider.html'
    };

    return directive;
  }

})();