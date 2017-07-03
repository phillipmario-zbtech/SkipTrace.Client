(function () {
  'use strict';

  angular
    .module('skiptrace.collections')
    .controller('CollectionsController', CollectionsController);

  CollectionsController.inject = ['collectionsState', 'uiTourService', '$aside', '$q', '$stateParams', 'logger', 'guardSvc', 'userSvc', 'exception', 'alertService', 'LiabilityService'];
  /* @ngInject */
  function CollectionsController(collectionsState, uiTourService, $aside, $q, $stateParams, logger, guardSvc, userSvc, exception, alertService, LiabilityService) {
    var vm = this;
    vm.openLeftAside = openLeftAside;
    vm.openRightAside = openRightAside;
    vm.user = {};
    vm.guardSvc = guardSvc;
    vm.moduleInfo = {
      title: 'Collections & Debt Recovery',
      helpText: 'This Module allows allows management of debt recovery, letter dispatch and invoices.'
    }
    vm.debtView = {
      templateUrl: 'debtPopoverSummary.html',
      title: 'Debt Summary'
    };
    vm.status = {
      loaded: false,
      busy: false,
      message: ''
    };
    vm.letters = [];
    vm.unclearedCollectionPayments = [];
    vm.outstandingCollectionInvoices = [];
    vm.startTour = function () {
      var x = uiTourService.getTourByName('collectionsTour');
      x.start()
    }
    activate();

    ////////////////

    function activate() {
      var promises = [
        getLetters(),
        getUnclearedCollectionPayments(),
        getOutstandingCollectionInvoices()
      ];
      return $q.all(promises).then(function () {
        logger.info('Activating Collections Module');
      });
    }

    function openLeftAside() {
      var asideInstance = $aside.open({
        templateUrl: 'app/collections/collections-left.html',
        controller: 'CollectionsLeftAsideController',
        controllerAs: 'vm',
        placement: 'left',
        size: 'md'
      });
    }

    function openRightAside() {
      var asideInstance = $aside.open({
        templateUrl: 'app/collections/collections-right.html',
        controller: 'CollectionsRightAsideController',
        controllerAs: 'vm',
        placement: 'right',
        size: 'md'
      });
    }




    function getLetters() {}

    function getUnclearedCollectionPayments() {}

    function getOutstandingCollectionInvoices() {}

  }
})();
