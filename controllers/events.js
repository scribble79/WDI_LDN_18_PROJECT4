var Events = require('../models/event');

function eventsIndex(req, res) {
  Event.find(function(err, events) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(events);
  });
}

function eventsShow(req, res) {
  Event.findById(req.params.id, function(err, event) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(event);
  });
}

function eventsUpdate(req, res) {
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, event) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(event);
  });
}

function eventsDelete(req, res) {
  Event.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json({ message: err });
    return res.status(204).send();
  });
}

module.exports = {
  index: eventsIndex,
  show: eventsShow,
  update: eventsUpdate,
  delete: eventsDelete
};