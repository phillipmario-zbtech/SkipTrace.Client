(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .factory('AgendaService', AgendaService);

  AgendaService.$inject = [' appointmentResource', 'reminderResource', 'userSvc'];
  /* @ngInject */
  function AgendaService(appointmentResource, reminderResource, userSvc) {
    var service = {
      reminders: [],
      appointments: [],
      newReminder: newReminder,
      newAppointment: newAppointment,
      getReminders: getReminders,
      getAppointments: getAppointments,
      addReminder: addReminder,
      addAppointment: addAppointment,
      removeReminder: removeReminder,
      removeAppointment: removeAppointment

    };

    return service;

    ////////////////
    function getReminders() {
      return reminderResource.query(
        function success(result) {
          service.reminders = result;
        },
        function failure(result) {
          console.error(result);
        }).$promise;
    }

    function newReminder() {
      return new reminderResource;
    }

    function addReminder(reminder) {
      reminderResource.save(reminder);
      service.reminders.push(reminder);
    }

    function deleteReminder(index) {
      service.reminders.splice(index, 1);
    }

    function removeReminder() {
      var oldList = service.reminders;
      service.reminders = [];
      angular.forEach(oldList, function (x) {

        if (!x.completed) service.reminders.push(x);
      });
    }




    function getAppointments() {
      return appointmentResource.query(
        function success(result) {
          service.appointments = result;
        },
        function failure(result) {
          console.error(result);
        }).$promise;
    }

    function newAppointment() {
      return new appointmentResource;
    }

    function addAppointment(appointment) {
      appointmentResource.save(appointment);
      service.appointments.push(appointment);
    }

    function deleteAppointment(index) {
      service.appointments.splice(index, 1);
    }

    function removeAppointment() {
      var oldList = service.appointments;
      service.appointments = [];
      angular.forEach(oldList, function (x) {

        if (!x.completed) service.appointments.push(x);
      });
    }
  }
})();
