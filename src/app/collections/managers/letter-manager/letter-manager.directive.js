(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .directive('letterManager', letterManager);

  letterManager.$inject = ['collectionsState'];

  function letterManager(collectionsState) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: LetterManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/managers/letter-manager/letter-manager.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function LetterManagerController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    
    activate();
    //////////////////////////////////////////////
    function activate() {
      vm.status.loaded = true;
      var promises = [];
      $q.all(promises)
        .then(function () {})
        .catch(null)
        .finally(function () {
          vm.status.loaded = false;
        });
    }
  }
})();
