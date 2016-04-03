var mongoose = require('mongoose');
var Event = require('../models/event');
var db = require('./database');

mongoose.connect(db.uri);

Event.collection.drop();

Event.create([{
  name: "Breakfast Club",
  date: 2/4/16,
  content: "Breakfast club starts at 8am",
  image: "Cute kids eating"
},{
  name: "Lunch Club",
  date: 31/3/16,
  content: "Lunchclub starts at 12pm",
  image: "Kids having lunch"
},{
  name: "After school club",
  date: 16/4/16,
  content: "After school club starts at 3.30pm",
  image: "Kids playing in the playground"
},], function(err, events) {
  if(err) console.error(err);
  else console.log(events);
  mongoose.connection.close();
});