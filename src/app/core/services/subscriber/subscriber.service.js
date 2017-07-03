(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('SubscriberService', SubscriberService);

  SubscriberService.inject = ['$uibModal', '$settings', '$rootScope', '$http', '$q', 'exception', 'logger', 'alertService', 'Hub', 'storageSvc',
    'employeeResource', 'memberResource', 'noticeResource', 'subscriptionResource'
  ];
  /* @ngInject */
  function SubscriberService($uibModal, $settings, $rootScope, $http, $q, exception, alertService, logger, Hub, storageSvc,
    employeeResource, memberResource, noticeResource, subscriptionResource) {
    var baseUrl = $settings.settings.apiBaseUrl.value,
      //Hub Declaration-Start 
      huburl = baseUrl + '/signalr',
      hub = new Hub('subscriber', {
        rootPath: huburl,
        logging: false,
        useSharedConnection: false,
        listeners: {
          'assignment': function (assignment) { 
            $rootScope.$apply();
          },
          'memberAdded': function (id) {},
          'memberSuspended': function (id) {},
          'subscriptionAdded': function (id) {},
          'subscriptionSuspended': function (id) {}
        },
        methods: [

        ],
        queryParams: {
          'access_token': storageSvc.retrieve("accessToken")
        },
        errorHandler: function (error) {
          alertService.add('danger', error);
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
            alertService.add('warning', 'connecting to subscriber service')
          }
          if (stateNames[state.newState] == 'connected') {
            //service.connected = true;
            alertService.add('success', 'connected to subscriber service')
          }
          if (stateNames[state.newState] == 'disconnected') {
            //service.connected = false;
            alertService.add('warning', 'disconnected from subscriber service')
          }
          if (stateNames[state.newState] == 'reconnecting') {
            //service.connected = false;
            alertService.add('warning', 'reconnecting to subscriber service')
          }
        }
      });
    //HUB Declaration-End 

    var service = {
      setupQuery: setupQuery,
      search: search,
      queryFromParams: queryFromParams,
      //sales reps

      getAgents: getAgents,

      members: [],
      suspendedMembers: [],
      getMembers: getMembers,
      getSuspendedMembers: getSuspendedMembers,
      getMember: getMember,
      openMemberDialog: openMemberDialog,

      notices: [],
      getRenewalNotices: getRenewalNotices,


      //subscriptions
      getSubscription: getSubscription,
      getSubscriptions: getSubscriptions,

      //transfers

      getAgentMembers: getAgentMembers
    };

    return service;

    //////////////// 
    function setupQuery(selectableFilters) {
      return memberResource
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

    function search(query) {
      return memberResource
        .search(query)
        .$promise;
    }



    function openMemberDialog() {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/core/services/subscriber/member-dialog.html',
        controller: 'MemberDialogController',
        controllerAs: 'vm',
        size: 'lg'
        //appendTo: parentElem,
        //resolve: {
        //  items: function () {
        //    return $ctrl.items;
        //  }
        //}
      });
      return modalInstance.result.then(function (application) { 
        //save member, member address, 
        return $q.when(application);
      }, function () {
        logger.log('Modal dismissed at: ' + new Date());
      });
    }
    //asles rep
    function getAgents() {
      return employeeResource.agents().$promise;

    }

    //member

    function getMembers() {
      return $http.get(baseUrl + '/api/members')
        .then(success)
        .catch(fail);

      function success(response) {
        service.members = response.data;
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getMembers')(e);
      }
    }

    function getSuspendedMembers() {
      service.suspendedMembers = memberResource.suspendedMembers();
      return $q.when(service.suspendedMembers)
    }

    function getMember(id) {
      var deferred = $q.defer();
      $http.get(baseUrl + '/api/members/' + id)
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    }

    //subscriptions
    function getSubscription(id) {
      return subscriptionResource
        .get({
          id: id
        });
    }

    function getSubscriptions() {}

    function getAgentMembers(id) {
      return memberResource
        .getAgentMembers(id)
        .$promise;
    }

    function getRenewalNotices() {
      service.notices = noticeResource.query();
      return $q.when(service.notices)
    }




  }
})();
