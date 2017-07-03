(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('taskListViewer', taskListViewer);

  taskListViewer.$inject = ['AgendaService'];

  function taskListViewer(AgendaService, userSvc) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: TaskListViewerController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/task-list-viewer/task-list-viewer.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function TaskListViewerController(AgendaService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.task = {};
    vm.itemCount = 0;
    vm.taskAdd = taskAdd;
    vm.deleteTask = deleteTask;
    vm.remove = remove;

    activate();
    //////// implementation /////////////
    function activate() {
      getTasks();
    }

    function getTasks() {
      vm.loading = true;

      AgendaService.getTasks().then(function (tasks) {
        vm.taskList = AgendaService.tasks;
      }).catch(null).finally(null);

      vm.taskList = AgendaService.tasks;
    }

    function taskAdd() {
      vm.task = AgendaService.newTask();
      vm.task.taskDescription = vm.taskDescription
      vm.task.completed = false;
      //add
      AgendaService.addTask(vm.task);
      vm.taskDescription = "";
    }

    function deleteTask(index) {
      AgendaService.deleteTask(index);
    }

    function remove() {
      AgendaService.remove();
      vm.taskList = AgendaService.tasks;
    }


  }
})();
