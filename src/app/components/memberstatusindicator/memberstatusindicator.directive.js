(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:memberstatusindicatorDirective
	* @description
	* # memberstatusindicatorDirective
	* Directive of the app
	*/

	angular
		.module('skiptrace.components')
		.directive('memberStatusIndicator', memberStatusIndicator);

	function memberStatusIndicator() {

		var directive = {
			link: link,
			restrict: 'EA',
			controller: 'MemberStatusIndicatorController',
			controllerAs: 'vm',
			scope: {
				member: '='
			},
			templateUrl: 'app/components/memberstatusindicator/memberstatusindicator.html'

		};

		return directive;

		function link(scope) {
			// write your code here
		}

	}

})();
