(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('quickDebtNote', quickDebtNote);

  quickDebtNote.inject = ['LiabilityService'];
  /* @ngInject */
  function quickDebtNote(LiabilityService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: QuickDebtNoteController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {
      },
      templateUrl: 'app/components/quick-debt-note/quick-debt-note.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function QuickDebtNoteController(LiabilityService) {
    var vm = this;
    vm.checkDebtExists = LiabilityService.checkDebtExists; 
    vm.postFeedbackNow = postFeedbackNow; 
    vm.debtFeedback = {};
    //////////////////////

    function postFeedbackNow() {
      var feedbackRequest = {
        debtid: vm.debtId,
        message: vm.debtFeedback.message
      };
      return LiabilityService.submitDebtFeedback(feedbackRequest)
        .then(function (data) {  
          
        })
        .catch(null)
        .finally(function () {
          vm.debtId = "";
          vm.debtFeedback = {};
        });

    }
  }
})();