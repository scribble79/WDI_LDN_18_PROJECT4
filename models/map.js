var mongoose = require('mongoose');

var mapSchema = mongoose.Schema({
  lat: Number,
  lng: Number,
  marker: { type: String, unique: true, required: true },
  name: String,
  address1: String,
  address2: String,
  address3: String,
  contact: String,
  position: Number
});

module.exports = mongoose.model("Map", mapSchema);


