angular
    .module('ChildrensCenters')
    .controller("eventsController", EventsController);

EventsController.$inject = ['Event']
function EventsController(Event) {
  var self = this;

  this.selectedEvent = null;

  this.selectEvent = function(event) {
    this.selectedEvent = event;
  }

  this.saveEvent = function() {
    Event.update(this.selectedEvent, function() {
      self.selectedEvent = null
    });
  }

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
      days[event.day][event.timeOfDay] = event;
    });

    self.all = days;
  });

}

