var Info = require('../models/info');

function infosIndex(req, res) {
  Info.find(function(err, infos) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(infos);
  });
}

function infosShow(req, res) {
  Info.findById(req.params.id).populate('events').exec(function(err, info) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(info);
  });
}

function infosCreate(req, res) {
  Info.create(req.body, function(err, info) {
    if(err) return res.status(500).json({ message: err });
    console.log(event);
    Info.findByIdAndUpdate(req.body.info, { $push: { infos: info._id } }, function(err, info) {
      if(err) return res.status(500).json({ message: err });

      return res.status(200).json(event);
    });
  });
}

function infosUpdate(req, res) {
  Info.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, info) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(info);
  });
}

function infosDelete(req, res) {
  Info.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json({ message: err });
    return res.status(204).send();
  });
}

module.exports = {
  index: infosIndex,
  show: infosShow,
  create: infosCreate,
  update: infosUpdate,
  delete: infosDelete
};