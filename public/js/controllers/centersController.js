angular
    .module('ChildrensCenters')
    .controller("centersController", CentersController);

CentersController.$inject = ['Center', 'Event', '$state']
function CentersController(Center, Event, $state) {
  var self = this;

  this.selectedEvent = null;

  this.all = Center.query();

  if($state.params.id) {
    Center.get($state.params, function(center) {
      var days = {
        Monday: { AM: {}, PM: {} },
        Tuesday: { AM: {}, PM: {} },
        Wednesday: { AM: {}, PM: {} },
        Thursday: { AM: {}, PM: {} },
        Friday: { AM: {}, PM: {} },
        Saturday: { AM: {}, PM: {} }
      };

      center.events.forEach(function(event) {
        days[event.day][event.timeOfDay] = event;
      });

      self.calendar = days;
    });
  }

  this.selectEvent = function(event) {
    this.selectedEvent = event;
  }

  this.saveEvent = function() {
    Event.update(this.selectedEvent, function() {
      self.selectedEvent = null
    });
  }


}