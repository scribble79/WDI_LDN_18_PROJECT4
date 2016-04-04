angular
    .module('ChildrensCenters')
    .controller("eventsController", EventsController);

EventsController.$inject = ['Event']
function EventsController(Event) {
  var self = this;

  Event.query(function(events) {
    var days = {
      Monday: { AM: {}, PM: {} },
      Tuesday: { AM: {}, PM: {} },
      Wednesday: { AM: {}, PM: {} },
      Thursday: { AM: {}, PM: {} },
      Friday: { AM: {}, PM: {} },
      Saturday: { AM: {}, PM: {} }
    };

    events.forEach(function(event) {
      days[event.day][event.timeOfDay] = {
        content: event.content,
        name: event.name
      };
    });

    self.all = days;
  });

}

