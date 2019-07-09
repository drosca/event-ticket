import angular from 'angular';

const Service = ($http) => {
  class eventsServices {
    static createEvent(data) {
      var req = {
        method: 'POST',
        url: 'http://3.122.252.138/event/new/',
        headers: {
          'Content-Type': undefined
        },
        data
      };

      return $http(req);
    }

    static updateEvent(data, id) {
      var req = {
        method: 'POST',
        url: `http://3.122.252.138/event/${id}/update/`,
        headers: {
          'Content-Type': undefined
        },
        data
      };

      return $http(req);
    }

    static getEvents() {
      return $http.get('http://3.122.252.138/events/', {});
    }

    static getEvent(id) {
      return $http.get(`http://3.122.252.138/event/${id}/`, {});
    }

    static getEventTicket(id) {
      return $http.get(`http://3.122.252.138/event/${id}/tickets/`, {});
    }

    static getAvailableTickets(id) {
      return $http.get(`http://3.122.252.138/event/${id}/tickets/available/`, {});
    }

    static checkStatus(id) {
      return $http.get(`http://3.122.252.138/ticket/${id}/`, {});
    }
  }

  return {
    createEvent: eventsServices.createEvent,
    updateEvent: eventsServices.updateEvent,
    getEvents: eventsServices.getEvents,
    getEvent: eventsServices.getEvent,
    getEventTicket: eventsServices.getEventTicket,
    checkStatus: eventsServices.checkStatus,
    getAvailableTickets: eventsServices.getAvailableTickets
  };
};

export default angular.module('event', []).factory('eventsServices', Service).name;

