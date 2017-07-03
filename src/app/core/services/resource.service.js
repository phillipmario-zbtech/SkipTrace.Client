(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('pricingResource', pricingResource);

  pricingResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function pricingResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/pricing/:id', {
        id: "@id"
      }, //null
      {
        'debt': {
          method: 'POST',
          url: baseUrl + '/api/pricing/debt'
        },
        'collectionpayment': {
          method: 'POST',
          url: baseUrl + '/api/pricing/collectionpayment'
        },
        'salepayment': {
          method: 'POST',
          url: baseUrl + '/api/pricing/salepayment'
        },
        'collectioninvoice': {
          method: 'POST',
          url: baseUrl + '/api/pricing/collectioninvoice'
        },
        'saleinvoice': {
          method: 'POST',
          url: baseUrl + '/api/pricing/saleinvoice'
        }
      }
    );
  }
})();

(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('processingResource', processingResource);

  processingResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function processingResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/processing',
      null, {
        'processingOptions': {
          method: 'POST',
          url: baseUrl + '/api/processing/processingOptions'
        },
        'process': {
          method: 'POST',
          url: baseUrl + '/api/processing/process'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/processing/search'
        },
        'processingDates': {
          method: 'POST',
          url: baseUrl + '/api/processing/dates'
        }
      }
    );
  }
})();

(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('appointmentResource', appointmentResource);

  appointmentResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function appointmentResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/appointments/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('reminderResource', reminderResource);

  reminderResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function reminderResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/reminders/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        }
      }
    );
  }
})();




(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('agreementResource', agreementResource);

  agreementResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function agreementResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/agreements/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/agreements/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/agreements/search'
        }
      }
    );
  }
})();

(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('aliasResource', aliasResource);

  aliasResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function aliasResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/aliases/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/aliases/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/aliases/search'
        }
      }
    );
  }
})();



(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('telephoneAssignmentResource', telephoneAssignmentResource);

  telephoneAssignmentResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function telephoneAssignmentResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/telephoneassignments/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/telephoneassignments/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/telephoneassignments/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('fieldAssignmentResource', fieldAssignmentResource);

  fieldAssignmentResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function fieldAssignmentResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/fieldassignments/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/fieldassignments/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/fieldassignments/search'
        }
      }
    );
  }
})();

(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('legalAssignmentResource', legalAssignmentResource);

  legalAssignmentResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function legalAssignmentResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/legalassignments/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/legalassignments/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/legalassignments/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('associateResource', associateResource);

  associateResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function associateResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/associates/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/associates/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/associates/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('backupResource', backupResource);

  backupResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function backupResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/backups/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/backups/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/backups/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('chequeResource', chequeResource);

  chequeResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function chequeResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/cheques/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/cheques/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/cheques/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('commissionResource', commissionResource);

  commissionResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function commissionResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/commissions/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/commissions/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/commissions/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('commissionrateResource', commissionrateResource);

  commissionrateResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function commissionrateResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/commissionrates/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/commissionrates/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/commissionrates/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('companyResource', companyResource);

  companyResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function companyResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/companies/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/companies/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/companies/search'
        },
        'initializeFolders': {
          method: 'POST',
          url: baseUrl + '/api/companies/initializeFolders'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('contactmethodResource', contactmethodResource);

  contactmethodResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function contactmethodResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/contactmethods/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/contactmethods/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/contactmethods/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('debtResource', debtResource);

  debtResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function debtResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/debts/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/debts/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/debts/search'
        },
        'basic': {
          method: 'GET',
          url: baseUrl + '/api/debts/basicDebt'
        },
        'getBalance': {
          method: 'POST',
          url: baseUrl + '/api/debts/balance'
        },
        'transferDebt': {
          method: 'POST',
          url: baseUrl + '/api/debts/transferdebt'
        },
        'checkDebtExists': {
          method: 'POST',
          url: baseUrl + '/api/debts/exists'
        },
        'getCollectorDebts': {
          method: 'GET',
          url: baseUrl + '/api/collectors/:id/debts',
          isArray: true
        },
        'unassignedDebts': {
          method: 'GET',
          url: baseUrl + '/api/debts/unassigned',
          isArray: true
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('debtorResource', debtorResource);

  debtorResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function debtorResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/debtors/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/debtors/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/debtors/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('debtoraddressResource', debtoraddressResource);

  debtoraddressResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function debtoraddressResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/debtoraddresses/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/debtoraddresses/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/debtoraddresses/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('employeeResource', employeeResource);

  employeeResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function employeeResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/employees/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'collectors': {
          method: 'GET',
          url: baseUrl + '/api/employees/collectors',
          isArray: true
        },
        'telephonecollectors': {
          method: 'GET',
          url: baseUrl + '/api/telephonecollectors',
          isArray: true
        },
        'fieldcollectors': {
          method: 'GET',
          url: baseUrl + '/api/fieldcollectors',
          isArray: true
        },
        'legalcollectors': {
          method: 'GET',
          url: baseUrl + '/api/legalcollectors',
          isArray: true
        },
        'agents': {
          method: 'GET',
          url: baseUrl + '/api/employees/agents',
          isArray: true
        }
      }
    );
  }
})();



(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('agentResource', agentResource);

  agentResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function agentResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/agents/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('telephonecollectorResource', telephonecollectorResource);

  telephonecollectorResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function telephonecollectorResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/telephonecollectors/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        }
      }
    );
  }
})();

(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('fieldcollectorResource', fieldcollectorResource);

  fieldcollectorResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function fieldcollectorResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/fieldcollectors/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        }
      }
    );
  }
})();

(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('legalcollectorResource', legalcollectorResource);

  legalcollectorResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function legalcollectorResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/legalcollectors/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        }
      }
    );
  }
})();

(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('enrollmentResource', enrollmentResource);

  enrollmentResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function enrollmentResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/enrollments/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/enrollments/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/enrollments/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('exchangerateResource', exchangerateResource);

  exchangerateResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function exchangerateResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/exchangerates/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/exchangerates/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/exchangerates/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('identifierResource', identifierResource);

  identifierResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function identifierResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/identifiers/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/identifiers/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/identifiers/search'
        }
      }
    );
  }
})();



(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('saleInvoiceResource', invoiceResource);

  invoiceResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function invoiceResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/saleinvoices/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/saleinvoices/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/saleinvoices/search'
        },
        'outstanding': {
          method: 'GET',
          url: baseUrl + '/api/saleinvoices/outstanding',
          isArray: true
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('collectionInvoiceResource', invoiceResource);

  invoiceResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function invoiceResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/collectioninvoices/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/collectioninvoices/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/collectioninvoices/search'
        },
        'outstanding': {
          method: 'GET',
          url: baseUrl + '/api/collectioninvoices/outstanding',
          isArray: true
        },
        'memberoutstanding': {
          method: 'POST',
          url: baseUrl + '/api/collectioninvoices/memberoutstanding',
          isArray: true
        }
      }
    );
  }
})();






(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('jobResource', jobResource);

  jobResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function jobResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/jobs/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/jobs/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/jobs/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('letterResource', letterResource);

  letterResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function letterResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/letters/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/letters/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/letters/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('memberResource', memberResource);

  memberResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function memberResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/members/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/members/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/members/search'
        },
        'suspendedMembers': {
          method: 'GET',
          url: baseUrl + '/api/members/suspended',
          isArray: true
        },
        'getAgentMembers': {
          method: 'GET',
          url: baseUrl + '/api/agents/:id/members',
          isArray: true
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('memberaddressResource', memberaddressResource);

  memberaddressResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function memberaddressResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/memberaddresses/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/memberaddresses/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/memberaddresses/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('noticeResource', noticeResource);

  noticeResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function noticeResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/notices/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/notices/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/notices/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('salePaymentResource', paymentResource);

  paymentResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function paymentResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/salepayments/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/salepayments/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/salepayments/search'
        },
        'unposted': {
          method: 'GET',
          url: baseUrl + '/api/salepayments/unposted',
          isArray: true
        },
        'unverified': {
          method: 'GET',
          url: baseUrl + '/api/salepayments/unverified',
          isArray: true
        },
        'uncleared': {
          method: 'GET',
          url: baseUrl + '/api/salepayments/uncleared',
          isArray: true
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('collectionPaymentResource', paymentResource);

  paymentResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function paymentResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/collectionpayments/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/collectionpayments/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/collectionpayments/search'
        },
        'unposted': {
          method: 'GET',
          url: baseUrl + '/api/collectionpayments/unposted',
          isArray: true
        },
        'unverified': {
          method: 'GET',
          url: baseUrl + '/api/collectionpayments/unverified',
          isArray: true
        },
        'uncleared': {
          method: 'GET',
          url: baseUrl + '/api/collectionpayments/uncleared',
          isArray: true
        }
      }
    );
  }
})();



(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('postResource', postResource);

  postResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function postResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/posts/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/posts/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/posts/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('productResource', productResource);

  productResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function productResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/products/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/products/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/products/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('productchargeResource', productchargeResource);

  productchargeResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function productchargeResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/productcharges/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/productcharges/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/productcharges/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('reasonResource', reasonResource);

  reasonResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function reasonResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/reasons/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/reasons/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/reasons/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('receiptbookResource', receiptbookResource);

  receiptbookResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function receiptbookResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/receiptbooks/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/receiptbooks/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/receiptbooks/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('referenceResource', referenceResource);

  referenceResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function referenceResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/references/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/references/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/references/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('requestResource', requestResource);

  requestResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function requestResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/requests/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/requests/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/requests/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('sectorResource', sectorResource);

  sectorResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function sectorResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/sectors/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/sectors/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/sectors/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('statementResource', statementResource);

  statementResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function statementResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/statements/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/statements/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/statements/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('statementinvoiceResource', statementinvoiceResource);

  statementinvoiceResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function statementinvoiceResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/statementinvoices/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/statementinvoices/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/statementinvoices/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('statementpaymentResource', statementpaymentResource);

  statementpaymentResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function statementpaymentResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/statementpayments/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/statementpayments/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/statementpayments/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('subscriptionResource', subscriptionResource);

  subscriptionResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function subscriptionResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/subscriptions/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('taxrateResource', taxrateResource);

  taxrateResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function taxrateResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/taxrates/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/taxrates/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/taxrates/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('territoryResource', territoryResource);

  territoryResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function territoryResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/territories/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/territories/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/territories/search'
        }
      }
    );
  }
})();


(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('zoneResource', zoneResource);

  zoneResource.inject = ['$resource', '$settings'];
  /* ngInject */
  function zoneResource($resource, $settings) {
    var baseUrl = $settings.settings.apiBaseUrl.value;
    return $resource(baseUrl + '/api/zones/:id', {
        id: "@id"
      }, //null
      {
        'update': {
          method: 'PUT'
        },
        'queryOptions': {
          method: 'POST',
          url: baseUrl + '/api/zones/queryOptions'
        },
        'search': {
          method: 'POST',
          url: baseUrl + '/api/zones/search'
        }
      }
    );
  }
})();
