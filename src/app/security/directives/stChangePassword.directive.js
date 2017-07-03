(function () {
  'use strict';

  angular.module('skiptrace.security')
    .directive('stChangePassword', stChangePassword);

  stChangePassword.inject = ['userManagementSvc'];
    /* @ngInject */
  function stChangePassword(userManagementSvc) {

    var directive = {
      link: link,
      restrict: 'E',
      replace: true,
      templateUrl: 'app/security/directives/stChangePassword.html'
    };

    return directive;

    function link(scope, element) {
      scope.password = "";
      scope.newPassword = "";
      scope.newPasswordConfirm = "";
      scope.change = function () {
        var data = {
          oldPassword: scope.password,
          newPassword: scope.newPassword,
          confirmPassword: scope.newPasswordConfirm
        };

        userManagementSvc.changePassword(data).finally(function () {
          scope.password = "";
          scope.newPassword = "";
          scope.newPasswordConfirm = "";
        });
      };
    }
  }

})();