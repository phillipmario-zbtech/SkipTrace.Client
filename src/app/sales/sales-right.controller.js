(function () {
  'use strict';

  angular
    .module('skiptrace.sales')
    .controller('SalesRightAsideController', RightAsideController);

  RightAsideController.inject = [ ];
    /* @ngInject */
  function RightAsideController( ) {
    var vm = this;
    vm.title = 'Agent Options';
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