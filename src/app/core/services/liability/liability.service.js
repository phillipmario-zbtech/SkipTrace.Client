(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('LiabilityService', LiabilityService);

  LiabilityService.inject = ['$uibModal', '$settings', '$rootScope', '$http', '$q', 'exception', 'logger', 'alertService', 'Hub', 'storageSvc',
    'debtResource', 'debtorResource', 'employeeResource'
  ];
  /* @ngInject */
  function LiabilityService($uibModal, $settings, $rootScope, $http, $q, exception, alertService, logger, Hub, storageSvc,
    debtResource, debtorResource, employeeResource) {
    var baseUrl = $settings.settings.apiBaseUrl.value,
      //Hub Declaration-Start 
      huburl = baseUrl + '/signalr',
      hub = new Hub('liability', {
        rootPath: huburl,
        logging: false,
        useSharedConnection: false,
        listeners: {
          'debtAssigned': debtAssigned
        },
        methods: [
          'assignTelephoneCollectorToDebt'
        ],
        queryParams: {
          'access_token': storageSvc.retrieve("accessToken")
        },
        errorHandler: function (error) {
          logger.log(error);
        },
        stateChanged: function (state) {
          var stateNames = {
            0: 'connecting',
            1: 'connected',
            2: 'reconnecting',
            4: 'disconnected'
          };
          if (stateNames[state.newState] == 'connecting') {
            //service.connected = false;
            alertService.add('warning', 'connecting to liability service')
          }
          if (stateNames[state.newState] == 'connected') {
            //service.connected = true;
            alertService.add('success', 'connected to liability service')
          }
          if (stateNames[state.newState] == 'disconnected') {
            //service.connected = false;
            alertService.add('warning', 'disconnected from liability service')
          }
          if (stateNames[state.newState] == 'reconnecting') {
            //service.connected = false;
            alertService.add('warning', 'reconnecting to liability service')
          }
        }
      });
    //HUB Declaration-End 

    var service = {
      init: init,
      connected: false,
      setupQuery: setupQuery,
      search: search,
      queryFromParams: queryFromParams,
      getDebtBalance: getDebtBalance,
      checkDebtExists: checkDebtExists,
      submitDebtFeedback: submitDebtFeedback,
      //liabilities

      //agreements 
      debts: [],
      unassignedDebts: [],
      openLiabilityDialog: openLiabilityDialog,

      getDebts: getDebts,
      getUnassignedDebts: getUnassignedDebts,

      getDebt: getDebt,
      getFullDebt: getFullDebt,
      insertDebt: insertDebt,
      updateDebt: updateDebt,
      deleteDebt: deleteDebt,

      debtors: [],
      openDebtorDialog: openDebtorDialog,
      getDebtors: getDebtors,
      getDebtor: getDebtor,


      openAgreementDialog: openAgreementDialog,
      openAssignDebtToCollectorDialog: openAssignDebtToCollectorDialog,
      openReferenceDialog: openReferenceDialog,

      //Transfers
      getCollectorDebts: getCollectorDebts,
      //next

      //assigned debts
      transferDebt: transferDebt,
      assigneddebts: [],

      getCollectors: getCollectors,
      collectors: []


    };

    return service;

    ////////////////   

    function init() {
      getUnassignedDebts();
    }

    function setupQuery(selectableFilters) {
      return debtResource
        .queryOptions(selectableFilters)
        .$promise;
    }

    //populate the query with any route params making sure check if the property is an array or single value
    function queryFromParams(query, routeParams) {
      for (var property in query) {
        if (routeParams[property]) {
          if (angular.isArray(query[property])) {
            if (angular.isArray(routeParams[property])) {
              query[property] = routeParams[property];
            } else {
              query[property].push(routeParams[property]);
            }
          } else {
            query[property] = routeParams[property];
          }
        }
      }
    }
    //checkDebtExists
    function checkDebtExists(modelValue, viewValue) {
      var dfd = $q.defer(),
        debtId = modelValue || viewValue;
      if (debt) {
        dfd.promise = checkDebtExists(debtId);
      } else {
        dfd.resolve();
      }
      return dfd.promise;
    }

    function checkDebtExists(id) {
      return debtResource.checkDebtExists({
        debtId: id
      }).$promise;
    }
    //assignments 
    function debtAssigned(assignment) {
      $rootScope.$apply();
    }
    //assignments
    //submitDebtFeedback
    function submitDebtFeedback(feedback) {
      return $q.when(feedback);

    }
    //Get Debt Balance
    function getDebtBalance(request) {
      return debtResource
        .getBalance(request)
        .$promise;
    }
    //Search
    function search(query) {
      return debtResource
        .search(query)
        .$promise;
    }

    function openAssignDebtToCollectorDialog(debt) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/liability/assignment-dialog.html',
        controller: 'AssignCollectorDialogController',
        controllerAs: 'vm',
        size: 'lg',
        resolve: {
          LiabilityService: 'LiabilityService',
          /* @ngInject */
          debt: function (LiabilityService) {
            return LiabilityService.getDebt(debt.id);
          }
        }
      });

      return modalInstance.result.then(function (assignment) {}, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }

    function openLiabilityDialog(member) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/liability/liability-dialog.html',
        controller: 'LiabilityDialogController',
        controllerAs: 'vm',
        size: 'lg',
        resolve: {
          SubscriberService: 'SubscriberService',
          /* @ngInject */
          member: function (SubscriberService) {
            return SubscriberService.getMember(member.id);
          }
        }
      });

      return modalInstance.result.then(function (request) {
        //save 
        console.log(request);


      }, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });

    }

    function openAgreementDialog(debt) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/liability/agreement-dialog.html',
        controller: 'AgreementDialogController',
        controllerAs: 'vm',
        size: 'lg',
        resolve: {
          LiabilityService: 'LiabilityService',
          /* @ngInject */
          debt: function (LiabilityService) {
            return LiabilityService.getDebt(debt.id);
          }
        }
      });
      return modalInstance.result.then(function (agreement) {}, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }

    function openDebtorDialog(debt) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/liability/debtor-dialog.html',
        controller: 'DebtorDialogController',
        controllerAs: 'vm',
        size: 'lg',
        resolve: { /* @ngInject */
          pricing: function (PricingService) {
            return PricingService;
          }
        }
      });
      return modalInstance.result.then(function (debtor) {}, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }

    function openReferenceDialog(debt) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/liability/reference-dialog.html',
        controller: 'ReferenceDialogController',
        controllerAs: 'vm',
        size: 'lg',
        resolve: { /* @ngInject */
          pricing: function (PricingService) {
            return PricingService;
          }
        }
      });
      return modalInstance.result.then(function (reference) {}, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }

    function getCollectorDebts(id) {
      return debtResource
        .getCollectorDebts(id)
        .$promise;
    }

    function getCollectors() {
      return employeeResource.collectors().$promise;
    }

    function getDebts() {

      return $http.get(baseUrl + '/api/debts')
        .then(success)
        .catch(fail);

      function success(response) {
        service.debts = response.data;
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getDebts')(e);
      }
    }

    function getDebtors() {
      return $http.get(baseUrl + '/api/debtors')
        .then(success)
        .catch(fail);

      function success(response) {
        service.debtors = response.data;
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getDebtors')(e);
      }
    }

    function getDebt(id) {
      var deferred = $q.defer();
      $http.get(baseUrl + '/api/debts/' + id)
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    }

    function getFullDebt(id) {
      var deferred = $q.defer();
      $http.get(baseUrl + '/api/debts/' + id)
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    }

    function insertDebt(debt) {
      var deferred = $q.defer();
      $http.post(baseUrl + '/api/debts/', debt)
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    }

    function updateDebt(debt) {
      var deferred = $q.defer();
      $http.put(baseUrl + '/api/debts/' + debt.id, debt)
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    }

    function deleteDebt(debt) {
      var deferred = $q.defer();
      $http.delete(baseUrl + '/api/debts/' + debt.id)
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    }



    function getDebtor(debtorId) {
      return $http.get(baseUrl + '/api/debtors/' + debtorId)
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getDebtor')(e);
      }
    }
    //transfer debts
    function transferDebt(request) {
      return debtResource.transferDebt(request).$promise;
    }


    function getUnassignedDebts() {
      service.unassignedDebts = debtResource.unassignedDebts();
      return $q.when(service.unassignedDebts)
    }
  }
})();
