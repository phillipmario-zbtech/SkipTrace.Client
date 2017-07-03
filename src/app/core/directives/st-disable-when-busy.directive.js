(function () {
  'use strict';

  angular.module('skiptrace.core')
    .directive('stDisableWhenBusy', stDisableWhenBusy);

  stDisableWhenBusy.$inject = ['$rootScope'];
  /* @ngInject */
  function stDisableWhenBusy($rootScope) {
    var directive = {
      link: link,
      restrict: 'A',
      scope: {
        disableOn: '='
      }
    };

    return directive;

    function link(scope, element) {
      var target = element,
        disable = setDisable(scope.disableOn),
        busy = false;

      scope.$watch("disableOn", function (value) {
        setDisable(value);
        updateDisabled();
      });

      var bc = $rootScope.$on("appActivitySvc:isBusyChanged", function (event, args) {
        busy = args.busy;
        updateDisabled();
      });

      function updateDisabled() {
        angular.element(target).prop('disabled', disable || busy);
      }

      function setDisable(boolArray) {
        var result = false;

        if (boolArray) {
          boolArray.forEach(function (b) {
            if (b) {
              result = true;
            }
          });
        }

        disable = result;
      }
    }
  }
})();
