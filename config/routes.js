var router = require('express').Router();
var jwt = require('jsonwebtoken');
var adminsController = require('../controllers/admins');
var authenticationController = require('../controllers/authentication');
var secret = require('../config/tokens').secret;

// custom JWT middleware
function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' });

  var token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, function(err, user) {
    if(!admin) return res.status(401).json({ message: 'Invalid token' });
    req.admin = admin;
    next();
  });
}

router.route('/admins')
  .get(secureRoute, adminsController.index);

router.route('/admins/:id')
  .all(secureRoute)
  .get(adminsController.show)
  .put(adminsController.update)
  .delete(adminsController.delete);

router.post('/register', authenticationController.register);
router.post('/login', authenticationController.login);

module.exports = router;