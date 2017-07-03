(function () {
    'use strict';

    angular.module('skiptrace.security')
        .controller('ManageController', ManageController);

    ManageController.inject = ['$scope', 'userManagementSvc'];
      /* @ngInject */
    function ManageController($scope, userManagementSvc) {
        $scope.title = 'Manage';
        $scope.loginProviders = userManagementSvc.loginProviders;
        $scope.userLogins = userManagementSvc.userLogins;
        $scope.manageInfo = userManagementSvc.info;
        $scope.addLogin = userManagementSvc.addLogin;
        $scope.removeLogin = userManagementSvc.removeLogin;

        activate();

        function activate() {
            userManagementSvc.load();
        }

    }
})();  