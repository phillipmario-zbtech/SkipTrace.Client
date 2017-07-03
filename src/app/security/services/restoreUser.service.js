(function () {
  'use strict';


  angular.module('skiptrace.security')
    .factory('restoreUserSvc', restoreUserSvc);

  restoreUserSvc.inject = ['$location', '$q', 'storageSvc', 'activitySvc', 'userSvc'];
    /* @ngInject */
  function restoreUserSvc($location, $q, storageSvc, activitySvc, userSvc) {
    var service = {
      restore: restore
    };

    return service;

    function restore() {
      activitySvc.busy("restoreUserSvc");

      if (storageSvc.retrieve("accessToken")) {
        return userSvc.getUserInfo()
          .then(function (result) {
            if (result.data.hasRegistered) {
              userSvc.setUser(result.data);
              activitySvc.idle("restoreUserSvc");
            } else {
              activitySvc.idle("restoreUserSvc");
              $location.path("/signIn");
            }
          })
          .catch(function (result) {
            activitySvc.idle("restoreUserSvc");
            $location.path("/signIn");
          })
      }

      else {
        var deferred = $q.defer();
        deferred.resolve(false);
        activitySvc.idle("restoreUserSvc");
        return deferred.promise;
      }

    }
  }
})();