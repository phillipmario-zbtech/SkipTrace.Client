(function () {
  'use strict';

  angular
    .module('skiptrace.sales')
    .directive('salesMemberManager', salesMemberManager);

  salesMemberManager.$inject = ['salesState'];

  function salesMemberManager(salesState) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: SalesMemberManagerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/sales/managers/member-manager/member-manager.html'
    };
    return directive;

    function link(scope, element, attrs) {


    }
  }
  /* @ngInject */
  function SalesMemberManagerController(salesState, $q, $scope, $stateParams, logger, guardSvc, userSvc, exception, alertService, SubscriberService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.guardSvc = guardSvc;
    vm.title = 'Members';
    vm.memberView = {
      templateUrl: 'memberPopoverSummary.html',
      title: 'Member Summary'
    };


    vm.search = search;
    vm.filterBy = filterBy;
    vm.members = [];
    vm.newMember = newMember;

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
        configureMemberSearch()
      ];
      return $q.all(promises).then(function () {
        //search();
      });
    }

    function configureMemberSearch() {
      //get the filter values and the order by values to chooose from
      SubscriberService.setupQuery({
          filters: ['products']
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
            SubscriberService.queryFromParams(vm.query, $stateParams);
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
      vm.members.length = 0;
      return SubscriberService.search(vm.query)
        .then(function (results) {
          vm.members = results.members;
          return results;
        }, function (result) {
          alertService.add('danger', 'Back-End service endpoint api has thrown the exception below.  Error: ' + result.data)
          //alert("Web API has thrown the exception below.  Error: " + result.data);
        })
        .finally(function () {
          vm.status.busy = false;
        });
    }

    function newMember() {
      return SubscriberService.openMemberDialog()
      .then(function (){ 
      })
      .catch()
      .finally()
    }
  }
})();
