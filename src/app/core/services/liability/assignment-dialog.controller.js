(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('AssignCollectorDialogController', AssignCollectorDialogController);

  AssignCollectorDialogController.inject = ['debt', '$uibModalInstance', 'lookupService'];
  /* ngInject */
  function AssignCollectorDialogController(debt, $uibModalInstance, lookupService) {
    var vm = this;
    vm.debt = debt;
    vm.assignment = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Assign Debt to Collector';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.assignment);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('TelephoneCollectorAssignmentDialogController', TelephoneCollectorAssignmentDialogController);

  TelephoneCollectorAssignmentDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function TelephoneCollectorAssignmentDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.assignment = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Assign to Telephone Collector';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.assignment);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();

(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('FieldCollectorAssignmentDialogController', FieldCollectorAssignmentDialogController);

  FieldCollectorAssignmentDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function FieldCollectorAssignmentDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.assignment = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Assign to Field Collector';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.assignment);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();

(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .controller('LegalCollectorAssignmentDialogController', LegalCollectorAssignmentDialogController);

  LegalCollectorAssignmentDialogController.inject = ['$uibModalInstance', 'lookupService'];
  /* ngInject */
  function LegalCollectorAssignmentDialogController($uibModalInstance, lookupService) {
    var vm = this;
    vm.assignment = {};
    vm.ok = ok;
    vm.cancel = cancel;
    vm.title = 'Assign to Legal Collector';
    activate();

    ////////////////

    function activate() {}

    function ok() {
      $uibModalInstance.close(vm.assignment);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
