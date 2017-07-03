(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:loaderCtrl
	* @description
	* # loaderCtrl
	* Controller of the app
	*/

	angular
		.module('skiptrace.components')
		.controller('LoaderController', Loader);

	Loader.$inject = [];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Loader() {
		/*jshint validthis: true */
		var vm = this;
		vm.title = 'directive';

	}

})();
