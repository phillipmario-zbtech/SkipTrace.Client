(function () {
  'use strict';

  angular
    .module('skiptrace.layout')
    .controller('FooterController', FooterController);

  FooterController.inject = ['$state', 'routerHelper', 'config'];
  /* @ngInject */
  function FooterController($state, routerHelper, config) {
    var vm = this;
    var states = routerHelper.getStates();
    vm.isCurrent = isCurrent;
    vm.navline = {
      title: config.appTitle,
      text: 'Created by Zetabyte Technologies',
      link: 'http://twitter.com/zbtechtt'
    };
vm.connectionStatus = 'Error Connecting to SkipTrace endpoint...';
    activate();

    ////////////////

    function activate() { getNavRoutes(); }

    function getNavRoutes() {
      vm.navRoutes = states.filter(function (r) {
        return r.settings && r.settings.nav;
      }).sort(function (r1, r2) {
        return r1.settings.nav - r2.settings.nav;
      });
    }

    function isCurrent(route) {
      if (!route.title || !$state.current || !$state.current.title) {
        return '';
      }
      console.lo(route);
      var menuName = route.title;
      return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
    }
  }
})();