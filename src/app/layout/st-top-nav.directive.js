(function () {
  'use strict';

  angular
    .module('skiptrace.layout')
    .directive('stTopNav', stTopNav);

  /* @ngInject */
  function stTopNav() {
    var directive = {
			link: link,
      bindToController: true,
      controller: TopNavController,
      controllerAs: 'vm',
      restrict: 'EA',
      scope: {
        navline: '=',
        menus: '=',
        brand: '='
      },
      templateUrl: 'app/layout/st-top-nav.html'
    };
    function link(scope, element, attrs, $location) {
      // write your code here
      scope.defaults = {
        brand: '',
        menus: [],
        search: {
          show: false
        }
      }; // end defaults
    } 

    TopNavController.$inject = ['$scope', '$location','guardSvc'];

    /* @ngInject */
    function TopNavController($scope, $location, guardSvc) {
      var vm = this;
      vm.title = 'Top Nav';
      vm.guardSvc = guardSvc;  
      $scope.isCollapsed = true;
			$scope.isActive = function (path) {
				var currentPath = $location.path().split('/')[1];
				if (currentPath.indexOf('?') !== -1) {
					currentPath = currentPath.split('?')[0];
				}
				return currentPath === path.split('/')[1];
			};
    }

    return directive;
  }
})();
