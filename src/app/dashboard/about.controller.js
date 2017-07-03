(function () {
  'use strict';

  angular
    .module('skiptrace.dashboard')
    .controller('AboutController', AboutController);

  AboutController.$inject = ['$q', 'logger'];
  /* @ngInject */
  function AboutController($q, logger) {
    var vm = this;
    vm.title = 'About';
    activate();
    vm.aliases = [];

    function activate() {
      var promises = [];
      return $q.all(promises).then(function () {
        //logger.info('Activated About View');
      });
    }

  }
})();
