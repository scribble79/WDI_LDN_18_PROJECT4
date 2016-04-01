var Admin = require('../models/admin');
var jwt  = require('jsonwebtoken');
var secret = require('../config/tokens').secret;

function register(req, res) {
  console.log(req.body);
  Admin.create(req.body, function(err, admin) {
    // tidy up mongoose's awful error messages
    if(err) {
      if(err.code && (err.code === 11000 || err.code === 11001)) {
        var attribute = err.message.match(/\$([a-z]+)_/)[1];
        err = "An account with that " + attribute + " already exists";
      }
      return res.status(400).json({ message: err.toString() });
    }

    var payload = { _id: admin._id, adminname: admin.adminname };
    var token = jwt.sign(payload, secret, "24h");
    return res.status(200).json({ message: "Thanks for registering", admin: admin, token: token });
  });
}

function login(req, res) {
  Admin.findOne({ email: req.body.email }, function(err, admin) {
    if(err) return res.send(500).json({ message: err });
    if(!admin || !admin.validatePassword(req.body.password)) return res.status(401).json({ message: "Unauthorized" });

    var payload = { _id: admin._id, adminname: admin.adminname };
    var token = jwt.sign(payload, secret, "24h");
    return res.status(200).json({ message: "Login successful", admin: admin, token: token });
  });
}

module.exports = {
  login: login,
  register: register
};