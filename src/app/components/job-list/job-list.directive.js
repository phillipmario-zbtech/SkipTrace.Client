(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('jobList', jobList);

  jobList.$inject = ['$q'];

  function jobList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        jobs: '='
      },
      controller: JobListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/job-list/job-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function JobListController() {
    var vm = this;
    vm.job = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addJob = addJob;
    vm.deleteJob = deleteJob;

    function addJob() {
      var job = angular.copy(vm.job);
      vm.jobs.push(job);
      vm.job = {};
    }

    function deleteJob(job) {
      var index = vm.jobs.indexOf(job);
      return vm.jobs.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
