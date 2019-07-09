import EventsController from './controllers/events.controller'
import EventViewController from './controllers/event-view.controller'
import EventCreateController from './controllers/event-create.controller'

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('events', {
      url: '/',
      template: require('./views/events.html'),
      controller: EventsController,
      controllerAs: 'eventCtrl'
    })
    .state('event-create', {
      url: '/event/create',
      template: require('./views/event-create.html'),
      controller: EventCreateController,
      controllerAs: 'createCtrl'
    })
    .state('event-edit', {
      url: '/event/:id/edit',
      template: require('./views/event-create.html'),
      controller: EventCreateController,
      controllerAs: 'createCtrl'
    })
    .state('event-view', {
      url: '/event/:id',
      template: require('./views/event-view.html'),
      controller: EventViewController,
      controllerAs: 'viewCtrl'
    })
}
