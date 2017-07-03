(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('debtorDemographicsView', debtorDemographicsView);

  debtorDemographicsView.$inject = ['$q'];

  function debtorDemographicsView($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: DebtorDemographicsViewController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
        debtor: '='
      },
      templateUrl: 'app/collections/debtor-manager/debtor-demographics-view/debtor-demographics-view.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function DebtorDemographicsViewController() {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    
    activate();
    //////////////////////////////////////////////
    function activate() {
      vm.status.loaded = true;
      var promises = [];
      $q.all(promises)
        .then(function () {})
        .catch(null)
        .finally(function () {
          vm.status.loaded = false;
        });
    }
  }
})();
