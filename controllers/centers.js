var Center = require('../models/center');

function centersIndex(req, res) {
  Center.find(function(err, centers) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(centers);
  });
}

function centersShow(req, res) {
  Center.findById(req.params.id).populate('events').exec(function(err, center) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(center);
  });
}

function centersUpdate(req, res) {
  Center.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, center) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(center);
  });
}

function centersDelete(req, res) {
  Center.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json({ message: err });
    return res.status(204).send();
  });
}

module.exports = {
  index: centersIndex,
  show: centersShow,
  update: centersUpdate,
  delete: centersDelete
};