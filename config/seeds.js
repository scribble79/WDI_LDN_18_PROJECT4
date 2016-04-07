var mongoose = require('mongoose');
var Event = require('../models/event');
var Center = require('../models/center');
var Info = require('../models/info');
var db = require('./database');

mongoose.connect(db.uri);

Center.collection.drop();
Event.collection.drop();
Info.collection.drop();

Event.create([{
  name: "Blooming Babies And Little Treasures",
  day: "Monday",
  startTime: "10.30",
  endTime: "11.45",
  timeOfDay: "AM",
  venue: "Ellen Brown",
  content: "Fun treasure baskets and heuristic play for Parents/Carers and babies 18 months and under.Come & explore.",
  image: "Kids playing"
},{
  name: "Bookstart",
  day: "Monday",
  startTime: "13.45",
  endTime: "15.00",
  timeOfDay: "PM",
  venue: "Ellen Brown",
  content: "Drop in session, play with puppets, share books, sing songs and stories. Children under 5 and Parents/Carers welcome. Term time only.",
  image: "Kids eating solid food"
},{
  name: "Childcare NVQ Course",
  day: "Tuesday",
  startTime: "9.30",
  endTime: "11.30",
  timeOfDay: "AM",
  venue: "Ellen Brown",
  content: "A year long course beginning in September 2015 including work experience placements.(Enrolled Students only)(Term Time Only)",
  image: "Kids cooking"
},{
  name: "Next steps Groups",
  day: "Tuesday",
  startTime: "13.00",
  endTime: "15.00",
  timeOfDay: "PM",
  venue: "Pilgrims’ Way Children’s Centre",
  content: "Eight weeks course for parents with children who have been diagnosed with autism. Referral only. Begins 17 May (Crèche Settling Session) to 19 July 2016",
  image: "Kids playing"
},{
  name: "Childminder’s Session",
  day: "Wednesday",
  startTime: "09.15",
  endTime: "10.30",
  timeOfDay: "AM",
  venue: "Ellen Brown",
  content: "A Stay and play session for childminders and prospective parents. (Registered Childminders only) First and third Wednesday of every month (Term Time Only)",
  image: "Kids playing"
},{
  name: "Save a Baby’s Life",
  day: "Wednesday",
  startTime: "13.30",
  endTime: "15.30",
  timeOfDay: "PM",
  venue: "Kintore Way",
  content: "Learn emergency first aid for incidents such as choking and CPR. This course is for parents/carers of babies, toddlers and all children under 5 years. Call Kintore Way on 02075251196 1 June 2016",
  image: "Cute kids eating"
},{
  name: "Parent/Carer & Baby/Toddler Group ",
  day: "Thursday",
  startTime: "09.15",
  endTime: "10.45",
  timeOfDay: "AM",
  venue: "Ellen Brown",
  content: "Come & play with your child and the team. Messy Play and lots of other fun activities to support your child’s learning. Five years and under.",
  image: "Kids learning"
},{
  name: "Bumps and Babies",
  day: "Thursday",
  startTime: "13.15",
  endTime: "14.45",
  timeOfDay: "PM",
  venue: "Pilgrims Way Chil- dren’s Centre",
  content: "Relaxing sensory play session families, parents and pregnant women.(Babies 12 months and under)",
  image: "Kids reading"
},{
  name: "Breastfeeding Support",
  day: "Friday",
  startTime: "10.00",
  endTime: "12.00",
  timeOfDay: "AM",
  venue: "Kintore Way",
  content: "For breastfeeding mothers who want advice and support in the early days of motherhood and beyond. Please feel free to bring your partner or a friend.",
  image: "Kids playing"
},{
  name: "Chatter time",
  day: "Friday",
  startTime: "13.30",
  endTime: "14.45",
  timeOfDay: "PM",
  venue: "Ellen Brown",
  content: "Fun plays activities focusing on developing children’s communication. Come and play with Kintore Way Children’s Centre and the Speech Therapy team. Five years and under. (Term time only)",
  image: "Kids playing"
},{
  name: "FUDGE Breakfast",
  day: "Saturday",
  startTime: "9.45",
  endTime: "11.30",
  timeOfDay: "AM",
  venue: "Kintore Way",
  content: "Activities for fathers, uncles, dads and granddads to spend time with their children. 18 June 2016",
  image: "Kids playing with Dad's"
},{
  name: "Kintore Way Community Evening ",
  day: "Saturday",
  startTime: "16.30",
  endTime: "18.30",
  timeOfDay: "PM",
  venue: "Kintore Way",
  content: "A community event to celebrate the Queen's 90th  Birthday. Bring a dish of food to share which reflects your family, culture or traditions. Get to know Staff and your local community through an evening of food and fun filled activities. An event for the whole family. 9 June 2016 Cost: Free if you bring food to share or £1 per child and £2 per adult."
}], function(err, events) {
  if(err) return console.error(err);
  var eventIds = events.map(function(event) {
    return event._id
  });

  Center.create([{
    name: "Kintore Way",
    link: 'http://www.kintoreway.com/page_viewer.asp?page=Home&pid=1',
    events: eventIds,
    address1: '97 - 102 Grange Road',
    address2: 'Bermondsey, London',
    address3: 'SE1 3BW',
    contact: "office@kintoreway.southwark.sch.uk",
    position: { lat: 51.494377, lng: -0.076093 }
  }], function(err, centers) {
    if(err) return console.error(err);
    console.log(centers);
    // mongoose.connection.close();
  });
});

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
  timeOfDay: "AM",
  venue: "Pilgrims’ Way Children’s Centre",
  content: "Opportunity for Dads and male carer's to meet and join in with the Children centres activities. Group session open to all, with 0-5years children.",
  image: "Kids playing with Dad's"
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
  if(err) return console.error(err);
  var eventIds = events.map(function(event) {
    return event._id
  });

  Center.create([{
    name: "Pilgrims Way",
    link: 'http://www.pilgrimswayprimary.co.uk/',
    events: eventIds,
    address1: "London Borough of Southwark",
    address2: "Tustin Estate Manor Grove",
    address3: "SE15 1EF",
    contact: "admin@pilgrimsway.southwark.sch.uk",
    position: { lat: 51.480484, lng: -0.055939 }
  }], function(err, centers) {
    if(err) return console.error(err);
    console.log(centers);
    // mongoose.connection.close();
  });
});

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
  timeOfDay: "AM",
  venue: "Pilgrims’ Way Children’s Centre",
  content: "Opportunity for Dads and male carer's to meet and join in with the Children centres activities. Group session open to all, with 0-5years children.",
  image: "Kids playing with Dad's"
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
  if(err) return console.error(err);
  var eventIds = events.map(function(event) {
    return event._id
  });

  Center.create([{
    name: "South Bermondsey",
    link: 'http://www.pilgrimswayprimary.co.uk/ccsb/',
    events: eventIds,
    address1: "London Borough of Southwark",
    address2: "Tustin Estate Manor Grove",
    address3: "SE15 1EF",
    contact: "admin@pilgrimsway.southwark.sch.uk",
    position: { lat: 51.480484, lng: -0.055939 }
  }], function(err, centers) {
    if(err) return console.error(err);
    console.log(centers);
    // mongoose.connection.close();
  });
});

Event.create([{
  name: "Book start",
  day: "Monday",
  startTime: "10.00",
  endTime: "11.30",
  timeOfDay: "AM",
  venue: "Canada Water Library",
  content: "Term time only. Lots of exciting ac- tivities with song and story time. For more information call 020 7525 2000",
  image: "Kids playing"
},{
  name: "Something Special",
  day: "Monday",
  startTime: "12.00",
  endTime: "16.00",
  timeOfDay: "PM",
  venue: "Rotherhithe Children and Family Centre",
  content: "A drop in session for parents with children with disabilities aged 0-19 years old. Advice and support on all areas. Last Monday of every month. Attended by paediatrician from Sun- shine house.",
  image: "Kids eating solid food"
},{
  name: "Rotherhithe Toy Lending Library",
  day: "Tuesday",
  startTime: "09.00",
  endTime: "10.00",
  timeOfDay: "AM",
  venue: "Rotherhithe Children and Family Centre",
  content: "A monthly toy lending library, with toys and books for children aged 0-5 years. Users must be registered to use the Lending Library. For more information please contact the centre on 020 7231 3755. once per month , please ask for dates",
  image: "Kids cooking"
},{
  name: "Rotherhithe Toy Lending Library",
  day: "Tuesday",
  startTime: "13.00",
  endTime: "15.00",
  timeOfDay: "PM",
  venue: "Rotherhithe Children and Family Centre",
  content: "A monthly toy lending library, with toys and books for children aged 0-5 years. Users must be registered to use the Lending Library. For more information please contact the centre on 020 7231 3755. once per month , please ask for dates",
  image: "Kids cooking"
},{
  name: "Breastfeeding Café",
  day: "Wednesday",
  startTime: "10.30",
  endTime: "11.30",
  timeOfDay: "AM",
  venue: "Rotherhithe Children and Family Centre",
  content: "Support group for breastfeeding parents, information, support and advice on breastfeeding. Facilitat- ed by area midwife, health visitor and peer support. Every Wednes- day from 2nd September. No session 23rd December. For more information please contact 0207 138 7815, 07766307521",
  image: "Kids playing"
},{
  name: "Talk and Play",
  day: "Wednesday",
  startTime: "12.00",
  endTime: "12.30",
  timeOfDay: "PM",
  venue: "Rotherhithe Children and Family Centre",
  content: "Speech and language information session for parents with children aged 0-6 months Please ask for dates.",
  image: "Cute kids eating"
},{
  name: "Family Music",
  day: "Thursday",
  startTime: "10.45",
  endTime: "11.30",
  timeOfDay: "AM",
  venue: "Rotherhithe Children and Family Centre",
  content: "Fun session with interactive songs, nursery rhymes and instruments. For parents and their children aged 0-5 years. Term time only.",
  image: "Kids learning"
},{
  name: "Family Music",
  day: "Thursday",
  startTime: "13.00",
  endTime: "15.00",
  timeOfDay: "PM",
  venue: "Rotherhithe Children and Family Centre",
  content: "Fun session with interactive songs, nursery rhymes and instruments. For parents and their children aged 0-5 years. Term time only.",
  image: "Kids reading"
},{
  name: "Family Zumba",
  day: "Friday",
  startTime: "09.30",
  endTime: "10.30",
  timeOfDay: "AM",
  venue: "Rotherhithe Children and Family Centre",
  content: "Latin dance-inspired fitness programme. For parents with children aged 1-16 years. Parents are responsible for their children as there is no crèche. Every Friday.",
  image: "Kids playing"
},{
  name: "Baby Stay and Play",
  day: "Friday",
  startTime: "12.45",
  endTime: "13.30",
  timeOfDay: "PM",
  venue: "Rotherhithe Children and Family Centre",
  content: "Drop in play session, for parents and babies aged 0 to 18months. Every Friday. For 6-18 month With baby sign",
  image: "Kids playing"
},{
  name: "Baby Stay and Play",
  day: "Saturday",
  startTime: "12.30",
  endTime: "14.30",
  timeOfDay: "AM",
  venue: "Rotherhithe Children and Family Centre",
  content: "Drop in play session, for parents and babies aged 0 to 18months. Every Friday. For 6-18 month With baby sign",
  image: "Kids playing"
},{
  name: "Baby Stay and Play",
  day: "Saturday",
  startTime: "12.30",
  endTime: "14.30",
  timeOfDay: "PM",
  venue: "Rotherhithe Children and Family Centre",
  content: "Drop in play session, for parents and babies aged 0 to 18months. Every Friday. For 6-18 month With baby sign",
  image: "Kids playing"
}], function(err, events) {
  if(err) return console.error(err);
  var eventIds = events.map(function(event) {
    return event._id
  });

  Center.create([{
    name: "Rotherhithe",
    link: 'http://rotherhitheprimary.co.uk/childrens-centre/',
    events: eventIds,
    address1: "Rotherhite New Road",
    address2: "London",
    address3: "SE16 2PL",
    contact: "office@rotherhite.southwark.sch.uk",
    position: { lat: 51.491570, lng: -0.049864 }
  }], function(err, centers) {
    if(err) return console.error(err);
    console.log(centers);
    Info.create({
      _id: 0,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, function(err, info) {
      if (err) console.log(err);
      console.log(info);
      mongoose.connection.close();
    });
  });
});