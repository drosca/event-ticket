export default class EventCreateController {
  constructor($state, $stateParams, $rootScope, eventsServices) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$rootScope = $rootScope;
    this.eventsServices = eventsServices;
    this.event = {};
    this.name = 'Event';

    if (this.$stateParams.id) {
      this.id = this.$stateParams.id;
      this.getEvent(this.$stateParams.id);
    }
  }

  createEvent() {
    if (this.$stateParams.id) {
      this.eventsServices.updateEvent(this.event, this.id).then(resp => {
        this.goToHome();
        this.$rootScope.$broadcast('EDIT_EVENT', resp.data)
      }).catch(() => {});
    } else {
      this.eventsServices.createEvent(this.event).then(resp => {
        this.goToHome();
        this.$rootScope.$broadcast('CREATE_EVENT', resp.data)
      }).catch(() => {});
    }
  }

  getEvent(id) {
    this.eventsServices.getEvent(id).then(resp => {
      this.event = resp.data;
    })
  }

  goToHome() {
    this.$state.go('events');
  }
}

angular.module('event', ['$state', '$stateParams', '$rootScope', 'eventsServices'])
  .controller('EventCreateController', EventCreateController);