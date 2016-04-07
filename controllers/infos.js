var Info = require('../models/info');

function infosUpdate(req, res) {
  Info.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, info) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(info);
  });
}

function infosShow(req, res) {
  Info.find({}, function(err, info) {
    console.log(info);
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(info);
    console.log(info);
  })
}

module.exports = {
  update: infosUpdate,
  show: infosShow
};