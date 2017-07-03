(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .directive('stMatches', stMatches);

  stMatches.inject = [];
  /* @ngInject */
  function stMatches() { 

    var directive = {
      require: 'ngModel',
      link: link,
      restrict: 'A',
      transclude: true
    };

    return directive;

    function link(scope, elem, attrs, ctrl) {
      var property1 = attrs.ngModel;
      var property2 = attrs.stMatches;

      scope.$watch(property1, matchValues);
      scope.$watch(property2, matchValues);

      function matchValues() {
        var val1 = $.getDeep(scope, property1);
        var val2 = $.getDeep(scope, property2);

        if (val1 === val2) {
          ctrl.$setValidity('matches', true);
        } else {
          ctrl.$setValidity('matches', false);
        }
      }
    }
  }

})();
