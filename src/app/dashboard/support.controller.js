(function () {
  'use strict';

  angular
    .module('skiptrace.dashboard')
    .controller('SupportController', SupportController);

  SupportController.$inject = ['$q', 'logger'];
  /* @ngInject */
  function SupportController($q, logger) {
    var vm = this;
    vm.title = 'Support';
    activate();

    function activate() {
      var promises = [];
      return $q.all(promises).then(function () {
        //logger.info('Activated Support View');
      });
    } 


  }
})();
