var Admin = require('../models/admin');

function adminsIndex(req, res) {
  Admin.find(function(err, admins) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(admins);
  });
}

function adminsShow(req, res) {
  Admin.findById(req.params.id, function(err, admin) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(admin);
  });
}

function adminsUpdate(req, res) {
  Admin.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, admin) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(admin);
  });
}

function adminsDelete(req, res) {
  Admin.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json({ message: err });
    return res.status(204).send();
  });
}

module.exports = {
  index: adminsIndex,
  show: adminsShow,
  update: adminsUpdate,
  delete: adminsDelete
};