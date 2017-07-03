(function () {
  'use strict';

  angular
    .module('skiptrace.dashboard')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = ['$settings'];

  function SettingsController($settings) {
    var vm = this;

    vm.$settings = $settings;

    activate();
    ////////////////////////////
    function activate() {}
  }
})();
