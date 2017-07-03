(function () {
  'use strict';

  angular
    .module('skiptrace.core', [
      'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngResource', 'ngStorage',
      'ngAria', 'ngMap', 'ngIdle', 'ngAside', 'ngplus', 'ngTagsInput', 'ngCsvImport', 'ngSettings',
      'blocks.exception', 'blocks.logger', 'blocks.router', 'blocks.alerter',
      'ui.router', 'ui.bootstrap', 'ui-listView', 'ui.select', 'ui.grid', 'ui.grid.autoResize', 'ui-rangeSlider', 'ui.checkbox',
      'ng-currency',
      'toastr',
      'nvd3',
      'truncate',
      'SignalR',
      'angularFileUpload',
      'angularMoment',
      'angular-loading-bar',
      'monospaced.qrcode',
      'daterangepicker',
      'chart.js',
      'cfp.hotkeys',
      'bm.uiTour' 
    ]);
})();
