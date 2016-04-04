var mongoose = require('mongoose');
var Event = require('../models/event');
var db = require('./database');

mongoose.connect(db.uri);

Event.collection.drop();

Event.create([{
  name: "Child Development Work- shop linking to EYFS",
  day: "Monday",
  startTime: "09.30",
  endTime: "12.00",
  timeOfDay: "AM",
  venue: "South Bermondsey CC",
  content: "Child Development",
  image: "Kids playing"
},{
  name: "Introducing Solid Foods",
  day: "Monday",
  startTime: "13.00",
  endTime: "15.00",
  timeOfDay: "PM",
  venue: "Pilgrims` Way Children's Centre",
  content: "Come and meet Jennie our Dietician, she can offer you help and practical advice in a group setting on how to start solid foods with your baby and provide you with helpful resources/recipes",
  image: "Kids eating solid food"
},{
  name: "Cook and Eat Course",
  day: "Tuesday",
  startTime: "10.00",
  endTime: "12.00",
  timeOfDay: "AM",
  venue: "Pilgrims` Way Children's Centre",
  content: "A practical work- shop for parents to cook and eat",
  image: "Kids cooking"
},{
  name: "Stay and Play",
  day: "Tuesday",
  startTime: "13.00",
  endTime: "15.00",
  timeOfDay: "PM",
  venue: "Pilgrims’ Way Children’s Centre",
  content: "Enjoy a Stay and Play ses- sion with opportunities for you and your child to plant grow and sow and play activ- ities for parents, carers, and child-minders with children aged 0-5years. Come and have fun with your little ones. All activities linking into the EYFS",
  image: "Kids playing"
},{
  name: "Stay and Play",
  day: "Wednesday",
  startTime: "09.30",
  endTime: "12.00",
  timeOfDay: "AM",
  venue: "South Bermondsey CC",
  content: "Enjoy a Stay and Play session with opportunities to get creative and play activities for all parents, carers, and child-minders with children aged 0-5years. Come and have fun with your little ones. All activities linking into the EYFS",
  image: "Kids playing"
},{
  name: "The Lunch Club",
  day: "Wednesday",
  startTime: "11.00",
  endTime: "15.00",
  timeOfDay: "PM",
  venue: "Pilgrims` Way Children's Centre",
  content: "A meet and greet session, for young parents with their babies and children, this is a great opportunity to meet new friends, enjoy lunch provided by the Children's Centre, and to access other professionals for advice/support.",
  image: "Cute kids eating"
},{
  name: "Terrific Two’s Workshop",
  day: "Thursday",
  startTime: "09.30",
  endTime: "12.00",
  timeOfDay: "AM",
  venue: "South Bermondsey CC",
  content: "How your children learn through play, no booking.",
  image: "Kids learning"
},{
  name: "Book Start",
  day: "Thursday",
  startTime: "13.30",
  endTime: "15.00",
  timeOfDay: "PM",
  venue: "Pilgrims Way Chil- dren’s Centre",
  content: "We think that books are a fundamental fun experience for both children and adults there- fore we are offering a Fun drop-in playgroup session for families. Interactive for both adult and child, learning new strategies' to help at home with being interested in books and stories.",
  image: "Kids reading"
},{
  name: "Stay and Play",
  day: "Friday",
  startTime: "09.00",
  endTime: "12.00",
  timeOfDay: "AM",
  venue: "Pilgrims’ Way Children’s Centre",
  content: "Play activities forparents, carers, and child- minders with children aged 0- 5years. Come and have fun with your little ones. All activities linking into the EYFS",
  image: "Kids playing"
},{
  name: "Stay and Play",
  day: "Friday",
  startTime: "13.30",
  endTime: "15.00",
  timeOfDay: "PM",
  venue: "South Bermondsey CC",
  content: "Enjoy a Stay and Play session with opportunities to get creative and play activities for all parents, carers, and child-minders with children aged 0-5years. Come and have fun with your little ones.",
  image: "Kids playing"
},{
  name: "Dads, Uncles, Granddads' Drop in Stay and Play Session",
  day: "Saturday",
  startTime: "12.30",
  endTime: "14.30",
  timeOfDay: "PM",
  venue: "Pilgrims’ Way Children’s Centre",
  content: "Opportunity for Dads and male carer's to meet and join in with the Children centres activities. Group session open to all, with 0-5years children.",
  image: "Kids playing with Dad's"
}], function(err, events) {
  if(err) console.error(err);
  else console.log(events);
  mongoose.connection.close();
});