(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .controller('CollectionsLeftAsideController', LeftAsideController);

  LeftAsideController.inject = [  '$uibModalInstance'];
    /* @ngInject */
  function LeftAsideController(  $uibModalInstance) {
    var vm = this;
    vm.title = 'Collections Supervisor';
    vm.ok = function (e) {
      $uibModalInstance.close();
      e.stopPropagation();
    };
    vm.cancel = function (e) {
      $uibModalInstance.dismiss();
      e.stopPropagation();
    };

    activate();

    ////////////////

    function activate() { }
  }
})();