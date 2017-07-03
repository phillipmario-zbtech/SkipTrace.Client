(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .controller('OperationsRightAsideController', RightAsideController);

  RightAsideController.inject = [ '$uibModalInstance'];
    /* @ngInject */
  function RightAsideController(  $uibModalInstance) {
    var vm = this;
    vm.title = 'Operation Support Options';
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