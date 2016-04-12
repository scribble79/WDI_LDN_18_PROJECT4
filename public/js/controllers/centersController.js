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

      self.week = {
        Monday: { AM: [], PM: [] },
        Tuesday: { AM: [], PM: [] },
        Wednesday: { AM: [], PM: [] },
        Thursday: { AM: [], PM: [] },
        Friday: { AM: [], PM: [] },
        Saturday: { AM: [], PM: [] }
      };
      self.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
      self.mapMarker = center;
      
      center.events.forEach(function(event) {
        self.week[event.day][event.timeOfDay].push(event);
      });

      self.calendar = self.week;

      self.slides = [
        '/images/' + self.currentCenter.name.toLowerCase().replace(' ', '') + '1.jpg',
        '/images/' + self.currentCenter.name.toLowerCase().replace(' ', '') + '2.jpg',
        '/images/' + self.currentCenter.name.toLowerCase().replace(' ', '') + '3.jpg',
        '/images/' + self.currentCenter.name.toLowerCase().replace(' ', '') + '4.jpg'
      ];
    });

    if($state.params.eventId) {
      self.selectedEvent = Event.get({ id: $state.params.eventId });
    }
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