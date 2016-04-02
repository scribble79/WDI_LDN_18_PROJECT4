var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  name: { type: String, unique: true, required: true },
  date: { type: Date, required: true },
  content: { type: String, required: true },
  image: String
});

module.exports = mongoose.model("Event", eventSchema);