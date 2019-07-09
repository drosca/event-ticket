import 'bootstrap/dist/css/bootstrap.css';
import 'angularjs-datepicker/dist/angular-datepicker.css';
import './assets/sass/main.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import uibootstrap from 'angular-ui-bootstrap';
import 'angularjs-datepicker';

import routing from './app.config';
import event from './app/modules/Event';

angular.module('app', [uirouter, event, uibootstrap, '720kb.datepicker'])
  .config(routing);
