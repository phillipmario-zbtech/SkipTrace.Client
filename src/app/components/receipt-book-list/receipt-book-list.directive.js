(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('receiptBookList', receiptBookList);

  receiptBookList.$inject = ['$q'];

  function receiptBookList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: {
        receiptBooks: '='
      },
      controller: ReceiptBookListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/receiptBook-list/receiptBook-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function ReceiptBookListController() {
    var vm = this;
    vm.receiptBook = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addReceiptBook = addReceiptBook;
    vm.deleteReceiptBook = deleteReceiptBook;

    function addReceiptBook() {
      var receiptBook = angular.copy(vm.receiptBook);
      vm.receiptBooks.push(receiptBook);
      vm.receiptBook = {};
    }

    function deleteReceiptBook(receiptBook) {
      var index = vm.receiptBooks.indexOf(receiptBook);
      return vm.receiptBooks.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
