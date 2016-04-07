var mongoose = require('mongoose');

var infoSchema = mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model("Info", infoSchema);