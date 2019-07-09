export default class EventsController {
  constructor($state, $rootScope, $timeout, eventsServices) {
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
    this.eventsServices = eventsServices;
    this.events = [];

    this.getEvents();
  }

  getEvents() {
    this.eventsServices.getEvents().then(resp => {
      this.events = resp.data;
    });
  }

  goToCreate() {
    this.$state.go('event-create');
  }
}

angular.module('event', ['$state', '$rootScope', '$timeout', 'eventsServices'])
  .controller('EventsController', EventsController);