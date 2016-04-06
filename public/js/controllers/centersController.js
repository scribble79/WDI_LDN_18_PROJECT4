angular
    .module('ChildrensCenters')
    .controller("centersController", CentersController);

CentersController.$inject = ['Center', 'Event', '$state', 'tokenService']
function CentersController(Center, Event, $state, tokenService) {
  var self = this;

  this.selectedEvent = null;
  this.newEvent = null;
  this.currentCenter = null;

  this.all = Center.query();

  if($state.params.id) {
    Center.get($state.params, function(center) {

      self.currentCenter = center;

      var days = {
        Monday: { AM: [], PM: [] },
        Tuesday: { AM: [], PM: [] },
        Wednesday: { AM: [], PM: [] },
        Thursday: { AM: [], PM: [] },
        Friday: { AM: [], PM: [] },
        Saturday: { AM: [], PM: [] }
      };

      self.mapMarker = center;

      center.events.forEach(function(event) {
        days[event.day][event.timeOfDay].push(event);
      });

      self.calendar = days;
    });
  }

  this.selectEvent = function(event) {
    this.selectedEvent = event;
  }

  this.addEvent = function(event) {
    this.newEvent.center = this.currentCenter._id;
    Event.save(this.newEvent, function(res){
      self.newEvent = null
      $state.go('center', { id: self.currentCenter._id });
    });
  }

  this.saveEvent = function() {
    Event.update(this.selectedEvent, function() {
      self.selectedEvent = null
    });
  }

  this.deleteEvent = function() {
    var id = this.selectedEvent._id;
    Event.delete({ id: id }, function() {
      self.selectedEvent = null;
      var box = document.getElementById(id)
      box.parentNode.removeChild(box);
    });
  }

}