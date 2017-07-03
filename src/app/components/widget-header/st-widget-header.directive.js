(function() {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('stWidgetHeader', stWidgetHeader);

  /* @ngInject */
  function stWidgetHeader() {
    //Usage:
    //<div st-widget-header title="vm.map.title"></div>
    // Creates:
    // <div st-widget-header=""
    //      title="Movie"
    //      allow-collapse="true" </div>
    var directive = {
      scope: {
        'title': '@',
        'subtitle': '@',
        'rightText': '@',
        'allowCollapse': '@'
      },
      templateUrl: 'app/components/widget-header/widget-header.html',
      restrict: 'EA',
      link: link
    };
    return directive;

    function link(scope, element) {
      scope.toggleContent = function() {
        if (scope.allowCollapse === 'true') {
          var content = angular.element(element).siblings('.widget-content');
          content.toggle();
        }
      };
    }
  }
})();
