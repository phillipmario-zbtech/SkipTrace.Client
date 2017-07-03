(function () {
  'use strict';

  angular
    .module('skiptrace.operations')
    .directive('processingManager', processingManager);

  processingManager.$inject = ['operationsState', 'dateRangeService', '$q', 'guardSvc', '$state', '$stateParams', 'BillingService', 'exception', 'logger', 'alertService'];

  function processingManager() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: ProcessingManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/operations/managers/processing-manager/processing-manager.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function ProcessingManagerController(operationsState, $scope, dateRangeService, $q, guardSvc, $state, $stateParams, BillingService, exception, logger, alertService) {
    var vm = this;
     vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.processing = true;
    vm.guardSvc = guardSvc;
    vm.title = 'Statements';

    vm.cashDate = {
      startDate: moment(),
      endDate: moment()
    };
    vm.noncashDate = {
      startDate: moment(),
      endDate: moment()
    };
 
    vm.search = search;
    vm.filterBy = filterBy; 
    vm.statements = [];
    vm.processBilling = processBilling;


    activate();
    ///////////////////////////////////////////
    function activate() {
      var now = moment().toDate();
      BillingService
        .getProcessingDates(now)
        .then(function (result) {
          //set ranges
          vm.cashDate = {
            startDate: moment(result.cashStartDate),
            endDate: moment(result.cashEndDate)
          };
          vm.noncashDate = {
            startDate: moment(result.nonCashStartDate),
            endDate: moment(result.nonCashEndDate)
          };
        })
    }

    function processBilling() {
      BillingService.setupProcessingQuery({
          cashDates: {
            startDate: vm.cashDate.startDate.toDate(),
            endDate: vm.cashDate.endDate.toDate()
          },
          nonCashDates: {
            startDate: vm.noncashDate.startDate.toDate(),
            endDate: vm.noncashDate.endDate.toDate()
          },
          filters: ['members', 'agents', 'products']
        })

        .then(function (result) {  
          alertService.add('success', 'Processing Completed.  Please Select From Filters to see results');
          vm.options = result.options;
          vm.query = result.query;
          vm.query.orderBy = "id";
          $scope.$watch("vm.query",
            function (newQuery, oldQuery) {
              if (newQuery !== oldQuery) {
                cleanMiscFilters(newQuery, oldQuery);
                search();
              }
            },
            true);

          if (Object.keys($stateParams).length > 0) {
            BillingService.queryFromParams(vm.query, $stateParams);
            search();
          } else {
            /*load the first page of all results here if no query is supplied */
          }
        }, function (result) {
          alertService.add('danger', 'Back-End service endpoint api has thrown the exception below.  Error: ' + result.data)
          //alert("Web API has thrown the exception below.  Error: " + result.data);
        })
        .finally(function () {
          vm.processing = false;
          vm.status.loaded = true;
        });
    }

    function cleanMiscFilters(newQuery, oldQuery) {
      vm.options.allFilterTypes.forEach(function (filterType) {
        if (!vm.options.selectableFilters[filterType] && newQuery[filterType].length > 0 && angular.equals(newQuery[filterType], oldQuery[filterType])) {
          newQuery[filterType].length = 0;
        }
      });
    }

    //called when clicking on link in the results (agent name for example). Clear out the existing query and add the new filter
    function filterBy(filterType, filterValue) {
      angular.forEach(vm.query, function (value, key) {
        if (filterType === key) {
          vm.query[key].length = 0;
          vm.query[key].push(String(filterValue));
        } else if (angular.isArray(value)) {
          vm.query[key].length = 0;
        } else if (key !== "orderBy") {
          vm.query[key] = "";
        }
      });
    }

    function search() {
      vm.status.busy = true;
      vm.statements.length = 0;
      return BillingService.search(vm.query)
        .then(function (results) { 
          vm.statements = results.statements;
          return results;
        }, function (result) {
          alertService.add('danger', 'Back-End service endpoint api has thrown the exception below.  Error: ' + result.data)
          //alert("Web API has thrown the exception below.  Error: " + result.data);
        })
        .finally(function () {
          vm.status.busy = false;
        });
    }

  }
})();
