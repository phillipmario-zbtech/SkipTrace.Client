(function () {
  'use strict';

  angular
    .module('skiptrace')
    .controller('AppController', AppController);

  AppController.inject = ['$rootScope', '$scope', 'userSvc', '$state', 'Idle', 'Keepalive', '$uibModal'];
  /* @ngInject */
  function AppController($rootScope, $scope, userSvc, $state, Idle, Keepalive, $uibModal) {
    var vm = this;
    activate();
    ////////////////    
    function activate() { 
    }
    $scope.started = false;

    function closeModals() {
      if ($scope.warning) {
        $scope.warning.close();
        $scope.warning = null;
      }

      if ($scope.timedout) {
        $scope.timedout.close();
        $scope.timedout = null;
      }
    }

    $scope.$on('IdleStart', function () {
      closeModals(); 
      $scope.warning = $uibModal.open({
        templateUrl: 'warning-dialog.html',
        windowClass: 'modal-danger'
      });
    });

    $scope.$on('IdleEnd', function () {
      closeModals();
    });

    $scope.$on('IdleTimeout', function () {
      closeModals();
      userSvc.signOut();
      $state.go('signIn');
      $scope.timedout = $uibModal.open({
        templateUrl: 'timedout-dialog.html',
        windowClass: 'modal-danger'
      });
    });

    $scope.start = function () {
      closeModals();
      Idle.watch();
      $scope.started = true;
    };

    $scope.stop = function () {
      closeModals();
      Idle.unwatch();
      $scope.started = false;

    };

  }
})();