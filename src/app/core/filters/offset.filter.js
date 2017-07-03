(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .filter('offset', offset);

  function offset() {
    return offsetFilter;

    //////////////// 
    function offsetFilter(input, start) {
      start = parseInt(start, 10);
      return input.slice(start);
    }

  }
})();