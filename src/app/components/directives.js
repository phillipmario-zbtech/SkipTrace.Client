(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('aDisabled', aDisabled);

  function aDisabled() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      compile: compile,
      link: link,
      restrict: 'A',
      scope: {
      }
    };
    return directive;

    function link(scope, element, attrs) {
    }
    function compile(tElement, tAttrs, transclude) {
      //Disable ngClick
      tAttrs["ngClick"] = "!(" + tAttrs["aDisabled"] + ") && (" + tAttrs["ngClick"] + ")";

      //Toggle "disabled" to class when aDisabled becomes true
      return function (scope, iElement, iAttrs) {
        scope.$watch(iAttrs["aDisabled"], function (newValue) {
          if (newValue !== undefined) {
            iElement.toggleClass("disabled", newValue);
          }
        });

        //Disable href on click
        iElement.on("click", function (e) {
          if (scope.$eval(iAttrs["aDisabled"])) {
            e.preventDefault();
          }
        });
      };
    }
  }

})();