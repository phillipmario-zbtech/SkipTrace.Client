(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .directive('stAsyncValidators', stAsyncValidators);

  stAsyncValidators.$inject = [];
  /* @ngInject */
  function stAsyncValidators() {
    var directive = {
      require: 'ngModel',
      link: link,
      restrict: 'A'
    };

    return directive;

    function link(scope, element, attrs, ngModel) {
      var asyncValidators = scope.$eval(attrs["stAsyncValidators"]);

      if (asyncValidators) {
        angular.extend(ngModel.$asyncValidators, asyncValidators);
      }
    }
  }
})();