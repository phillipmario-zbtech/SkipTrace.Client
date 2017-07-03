(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .directive('recoveryManager', recoveryManager);

  recoveryManager.$inject = ['collectionsState'];

  function recoveryManager(collectionsState) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: RecoveryManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/collections/managers/recovery-manager/recovery-manager.html'
    };
    return directive;

    function link(scope, element, attrs) {


    }
  }
  /* @ngInject */
  function RecoveryManagerController(collectionsState, $q, $scope, $stateParams, logger, guardSvc, userSvc, exception, alertService, LiabilityService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.guardSvc = guardSvc;
    vm.title = 'Debts';
    vm.debtView = {
      templateUrl: 'debtPopoverSummary.html',
      title: 'Debt Summary'
    };


    vm.search = search;
    vm.filterBy = filterBy;
    vm.debts = [];

    activate();

    ////////////////


    function getUserInfo() {
      return userSvc.getUserInfo()
        .then(function () {
          vm.user = userSvc.info;
        })
        .catch(function () {
          alertService.add('danger', 'Back-End service endpoint api has thrown the exception below.  Error: ' + result.data);
        })
        .finally(null);
    }

    function activate() {
      var promises = [
        configureDebtSearch()
      ];
      return $q.all(promises).then(function () {
        //search();
      });
    }

    function configureDebtSearch() {
      //get the filter values and the order by values to chooose from
      LiabilityService.setupQuery({
          filters: ['telephonecollectors', 'fieldcollectors', 'legalcollectors']
        })
        .then(function (result) {
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
            LiabilityService.queryFromParams(vm.query, $stateParams);
            search();
          } else {
            /*load the first page of all results here if no query is supplied */
          }
        }, function (result) {
          alertService.add('danger', 'Back-End service endpoint api has thrown the exception below.  Error: ' + result.data)
          //alert("Web API has thrown the exception below.  Error: " + result.data);
        })
        .finally(function () {
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
      vm.debts.length = 0;
      return LiabilityService.search(vm.query)
        .then(function (results) {
          vm.debts = results.debts;
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
