(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .directive('renewalsManager', renewalsManager);

  renewalsManager.$inject = ['operationsState', 'dateRangeService', 'alertService'];

  function renewalsManager() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: RenewalsManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/renewals-manager/renewals-manager.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function RenewalsManagerController(operationsState, dateRangeService, alertService) {
    var vm = this; 
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    
    vm.dateRange = {};
    vm.activate = activate;

    // specify default date range in controller 

    vm.renewalDate = {
      startDate: moment(),
      endDate: moment()
    };
    activate()

    function activate() {
      var result = dateRangeService.getProcessingDateRange();



    }
    function runProcessing() {

    }
  }
})();
