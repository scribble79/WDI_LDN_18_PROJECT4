var mongoose = require('mongoose');

var infoSchema = mongoose.Schema({
  _id: Number,
  content: String
});

module.exports = mongoose.model("Info", infoSchema);