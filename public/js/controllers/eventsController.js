angular
    .module('ChildrensCenters')
    .controller("eventsController", EventsController);

EventsController.$inject = ['Center']
function EventsController() {
  console.log("Loaded")
  var self = this;

  this.all = [];
  this.addEvent = addEvent;
  this.newEvent = {};
  this.updateEvent = updateEvent;
  this.deleteEvent = deleteEvent;

  function getEvents() {
    return 
    self.get()
    .then(function(res) {
      console.log(res)
      self.all = res.data;
    })
    .catch(function(err) {
      console.error(err);
    });
  }

  getEvents();


  function updateEvent(event) {
    return
    self.patch(Event._id, Event)
    .then(function(res) {
      Event.isEditing = false;
    })
    .catch(function(err) {
      console.log(err);
    });
  }


  function deleteEvent(event) {
    return
    self.delete("events/" + event._id)
    .then(function() {
      self.all = self.all.filter(function(_event) {
        return _event._id !== event._id
      });
    })
    .catch(function(err) {
      console.log(err);
    });
    getEvents();
  }

  function addEvent(){
    return
    self.post("events/", { event: self.newEvent })
    .then(function() {
      self.all.push(self.newEvent);
      self.newEvent = {};
              // self.all = res.data;
            })
    .catch(function(err) {
      console.log(err);
    });
  }

}

