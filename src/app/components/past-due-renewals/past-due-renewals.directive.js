(function () {
  'use strict';

  angular
    .module('skiptrace')
    .directive('pastDueRenewals', pastDueRenewals);

  pastDueRenewals.$inject = ['SubscriberService'];

  function pastDueRenewals(SubscriberService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: PastDueRenewalsController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/past-due-renewals/past-due-renewals.html'

    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function PastDueRenewalsController(SubscriberService) {
    var vm = this;
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    var renewals =[];

    activate();
    /////////////////////////////////////////////

    function activate(){
      
    }
  }
})();
