import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './event.routes';
import eventsServices from '../../services/events.services';

export default angular.module('app.event', [uirouter, eventsServices])
  .config(routing)
  .name