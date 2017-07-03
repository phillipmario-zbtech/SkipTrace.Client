(function () {
  'use strict';

  angular.module('skiptrace.security')
    .directive('stUserInfo', stUserInfo);

  stUserInfo.inject = ['config', '$rootScope', '$location', '$window', 'userSvc'];
  /* @ngInject */
  function stUserInfo(config, $rootScope, $location, $window, userSvc) { 
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/security/directives/stUserInfo.html',
      link: link

    };

    function link($scope, $element, attrs) {
      $scope.username = userSvc.info.username;
      $scope.signedIn = userSvc.info.signedIn;
      $scope.signOut = function () {
        userSvc.signOut();
        $location.path('/signIn');
      };
      $scope.redirectToScheduleManager = function () {
        $window.open(scheduleUrl, '_blank');
      };

      var sic = $rootScope.$on("userSvc:signedInChanged", function (event) {
        $scope.signedIn = userSvc.info.signedIn;
        $scope.username = userSvc.info.username;
      });
    }

    return directive;
  }

})();