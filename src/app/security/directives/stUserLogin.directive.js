(function () {
  'use strict';

  angular.module('skiptrace.security')
    .directive('stUserLogin', stUserLogin);

  function stUserLogin() {
    var directive = {
      restrict: 'A',
      replace: true,
      scope: {
        login: '=stUserLogin',
        action: '&'
      },
      templateUrl: 'app/security/directives/stUserLogin.html'
    };

    return directive;
  }

})();