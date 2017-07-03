(function () {
  'use strict';

  angular.module('skiptrace.security')
    .factory('guardSvc', guardSvc);

  guardSvc.inject = ['$state', '$q', 'userSvc', 'logger', 'statusSvc'];
    /* @ngInject */
  function guardSvc($state, $q, userSvc, logger, statusSvc) {
    var service = {
      guardRoute: guardRoute,
      authorized: authorized
    };

    return service;

    function guardRoute(requiredRoles) {
      return statusSvc.whenReady()
        .finally(function () {
          var deferred = $q.defer(), authResult = authorize(requiredRoles);
          if (authResult.authorized) {
            return deferred.resolve(authResult.authorized);
          } else {
            logger.error(authResult.message);
            return $q.reject(authResult.authorized);
          }
        });
    }

    function authorized(requiredRoles) {
      return authorize(requiredRoles).authorized;
    }

    function authorize(requiredRoles) {
      if (userSvc.info.signedIn) {
        if (requiredRoles && requiredRoles.length > 0) {
          if (userIsInRole(requiredRoles)) {
            return {
              authorized: true,
              message: ""
            };
          } else {
            return {
              authorized: false,
              message: "you do not have the required permissions."
            };
          }
        } else {
          return {
            authorized: true,
            message: ""
          };
        }
      } else {
        return {
          authorized: false,
          message: "you need to sign in first."
        };
      }
    }

    function userIsInRole(requiredRoles) {
      var result = false;
      requiredRoles.forEach(function (role) {
        if ($.arrayContains(userSvc.info.roles, role)) {
          result = true;
        }
      });
      return result;
    }
  }
})();