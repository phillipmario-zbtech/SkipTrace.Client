/* global toastr:false, moment:false */
(function () {
  'use strict';
  var config = {
    appErrorPrefix: '[SkipTrace Error] ',
    appTitle: 'SkipTrace',
    timeout: 1000,
    imageSettings: {
      imageBasePath: 'assets/images/people/',
      unknownPersonImageSource: 'unknown.png'
    },
    signatureSettings: {
      signatureBasePath: 'assets/images/signatures/'
    },
    documentSettings: {
      documentBasePath: 'assets/documents/'
    },
    paging: {
      pagesize: 10
    }
  };

  angular
    .module('skiptrace.core')
    .value('core.state', {})
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('config', config)
    .constant('toastr', toastr)
    .constant('malarkey', malarkey);
})();
