(function() {
    'use strict';

    angular
        .module('skiptrace.core')
        .directive('stAppReady', stAppReady);

    stAppReady.inject = ['statusSvc'];
      /* @ngInject */
    function stAppReady(statusSvc) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            scope: {

            }
        };
        return directive;
        
        function link(scope, element, attr) {
            statusSvc.isReady(attr.stAppReady);
        }
    } 
})();