(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .directive('reportsManager', reportsManager);

  reportsManager.$inject = ['operationsState', 'dateRangeService', 'alertService'];

  function reportsManager() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: ReportsManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/reports-manager/reports-manager.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function ReportsManagerController(operationsState, dateRangeService, alertService) {
    var vm = this; 
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    
    vm.dateRange = {};
    vm.activate = activate;

    // specify default date range in controller 

    vm.reportDate = {
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
