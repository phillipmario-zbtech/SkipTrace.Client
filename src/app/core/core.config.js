(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .config(settingsConfig)
    .config(toastrConfig)
    .config(configure)
    .config(loaderConfig)
    .config(tourConfig)
    .config(httpConfig)
    .config(idleConfig)
    .config(chartsConfig);



  settingsConfig.$inject = ['$settingsProvider'];
  /* @ngInject */
  function settingsConfig($settingsProvider) {
    $settingsProvider.setting('displayLanguage', {
        options: ['EN', 'FR', 'DE'],
        value: 'FR' // <-- default value
      })
      .setting('uiTheme', {
        options: ['dark', 'light', 'classic']
      })
      .setting('apiBaseUrl', {
        options: ['http://cc-aws-0:50000/api', 'http://cc-aws-1:50000/api','http://localhost:28335'],
        value: 'http://cc-aws-0:50000/api'
      });
  }

  chartsConfig.$inject = ['ChartJsProvider'];
  /* @ngInject */
  function chartsConfig(ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
      showLines: false
    });
  }


  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider', 'config'];
  /* @ngInject */
  function configure($logProvider, routerHelperProvider, exceptionHandlerProvider, config) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({
      docTitle: config.appTitle + ': '
    });
  }

  loaderConfig.$inject = ['cfpLoadingBarProvider'];
  /** @ngInject */
  function loaderConfig(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 500;
  }

  httpConfig.$inject = ['$provide', '$httpProvider'];
  /** @ngInject */
  function httpConfig($provide, $httpProvider) {
    // This is required for Browser Sync to work poperly
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    //================================================
    // Ignore Template Request errors if a page that was requested was not found or unauthorized.  The GET operation could still show up in the browser debugger, but it shouldn't show a $compile:tpload error.
    //================================================
    $provide.decorator('$templateRequest', ['$delegate', function ($delegate) {
      var mySilentProvider = function (tpl, ignoreRequestError) {
        return $delegate(tpl, true);
      }
      return mySilentProvider;
    }]);

    //================================================
    // Add an interceptor for AJAX errors
    //================================================
    /*
    $httpProvider.interceptors.push(['$q', '$location',
      function ($q, $location) {
        return {
          'responseError': function (response) {
            if (response.status === 401)
              $location.url('/signin');
            return $q.reject(response);
          }
        };
      }])
      */
  }

  tourConfig.$inject = ['TourConfigProvider'];
  /* @ngInject */
  function tourConfig(TourConfigProvider) {
    TourConfigProvider.enableNavigationInterceptors();
  }

  idleConfig.$inject = ['KeepaliveProvider', 'IdleProvider'];
  /* @ngInject */
  function idleConfig(KeepaliveProvider, IdleProvider) {
    IdleProvider.idle(300);
    IdleProvider.timeout(5);
    KeepaliveProvider.interval(10);
  }

})();
