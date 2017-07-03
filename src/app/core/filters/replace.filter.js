(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .filter('replaceString', replaceString);

  function replaceString() {
    return replaceStringFilter;

    ////////////////

    function replaceStringFilter(input, from, to) {
      input = input || '';
      from = from || '';
      to = to || '';
      return input.replace(new RegExp(from, 'g'), to);
    } 
  }
})();
