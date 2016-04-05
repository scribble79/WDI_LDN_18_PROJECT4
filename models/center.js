var mongoose = require('mongoose');

var centerSchema = mongoose.Schema({
  name: { type: String, unique: true, required: true },
  link: { type: String, required: true },
  events: [{ type: mongoose.Schema.ObjectId, ref: 'Event' }],
  address1: String,
  address2: String,
  address3: String,
  contact: String,
  position: { type: mongoose.Schema.Types.Mixed }
});

module.exports = mongoose.model("Center", centerSchema);