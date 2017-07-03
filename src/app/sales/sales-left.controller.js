(function () {
  'use strict';

  angular
    .module('skiptrace.sales')
    .controller('SalesLeftAsideController', LeftAsideController);

  LeftAsideController.inject = [ '$uibModalInstance'];
  function LeftAsideController(  $uibModalInstance) {
    var vm = this;
    vm.title = 'Sales Supervisor';
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