import event from './index';

describe('Controller: Events', function() {
  let $controller;

  beforeEach(angular.mock.module(event));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to Event', function() {
    let ctrl = $controller('EventsController');
    expect(ctrl.name).toBe('Event');
  });
});
