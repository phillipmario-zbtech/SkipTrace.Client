(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('stImgPerson', stImgPerson);

  stImgPerson.$inject = ['config'];
  /* @ngInject */
  function stImgPerson(config) {
    //Usage:
    //<img ht-img-person="{{person.imageSource}}"/>
    var basePath = config.imageSettings.imageBasePath;
    var unknownImage = config.imageSettings.unknownPersonImageSource;
    var directive = {
      link: link,
      restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {
      attrs.$observe('stImgPerson', function (value) {
        value = basePath + (value || unknownImage);
        attrs.$set('src', value);
      });
    }
  }
})();
