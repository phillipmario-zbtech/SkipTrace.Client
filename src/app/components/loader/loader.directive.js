(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:loaderDirective
	* @description
	* # loaderDirective
	* Directive of the app
	*/

	angular
		.module('skiptrace.components')
		.directive('loader', loader);

	function loader() {

		var directive = {
			link: link,
			restrict: 'EA',
			controller: 'LoaderController',
			scope: {
			},
			templateUrl: 'app/components/loader/loader.html'

		};

		return directive;

		function link(scope) {
			// write your code here
		}

	}

})();
