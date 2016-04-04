var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  name: { type: String, unique: true, required: true },
  day: String,
  startTime: String,
  endTime: String,
  timeOfDay: String,
  venue: String,
  content: { type: String, required: true },
  image: String
});

module.exports = mongoose.model("Event", eventSchema);