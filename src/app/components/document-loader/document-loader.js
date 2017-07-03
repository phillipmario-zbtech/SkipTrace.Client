(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('documentLoader', documentLoader);

  documentLoader.inject = ['$http', '$timeout', '$settings'];
  /* @ngInject */
  function documentLoader($http, $timeout, $settings) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: DocumentLoaderController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/document-loader/document-loader.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DocumentLoaderController($http, $timeout, $settings) {
    var vm = this;
    var baseUrl = $settings.settings.apiBaseUrl.value;
    vm.upload = [];
    vm.UploadedFiles = [];

  }
})();
