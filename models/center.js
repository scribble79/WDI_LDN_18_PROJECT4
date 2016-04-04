var mongoose = require('mongoose');

var centerSchema = mongoose.Schema({
  name: { type: String, unique: true, required: true },
  link: { type: String, required: true },
  events: [{ type: mongoose.Schema.ObjectId, ref: 'Event' }]
});

module.exports = mongoose.model("Center", centerSchema);