(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:memberstatusindicatorCtrl
	* @description
	* # memberstatusindicatorCtrl
	* Controller of the app
	*/

	angular
		.module('skiptrace.components')
		.controller('MemberStatusIndicatorController', MemberStatusIndicator );

		MemberStatusIndicator.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function MemberStatusIndicator() {
			/*jshint validthis: true */
			var vm = this;
		vm.title = 'directive';

		}

})();
