var router = require('express').Router();
var jwt = require('jsonwebtoken');
var adminsController = require('../controllers/admins');
var centersController = require('../controllers/centers');
var eventsController = require('../controllers/events');
var authenticationController = require('../controllers/authentication');
var secret = require('../config/tokens').secret;

// custom JWT middleware
function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' });

  var token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, function(err, admin) {
    if(!admin) return res.status(401).json({ message: 'Invalid token' });
    req.admin = admin;
    next();
  });
}

// admin routes
router.route('/admins')
  .get(secureRoute, adminsController.index);

router.route('/admins/:id')
  .all(secureRoute)
  .get(adminsController.show)
  .put(adminsController.update)
  .delete(adminsController.delete);

// center routes
router.route('/centers')
  .get(centersController.index);

router.route('/centers/:id')
  .get(centersController.show)
  .put(secureRoute, centersController.update)
  .delete(secureRoute, centersController.delete);  

 // event routes
router.route('/events')
  .get(eventsController.index);

router.route('/events/:id')
  .get(eventsController.show)
  .put(secureRoute, eventsController.update)
  .delete(secureRoute, eventsController.delete);

router.post('/register', authenticationController.register);
router.post('/login', authenticationController.login);

module.exports = router;