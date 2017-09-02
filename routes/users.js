var express = require('express');
var router = express.Router();

var User = require('../models/user');
var loginValidation = require('../utils/loginValidation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserEmail/:email', function(req, res, next) {
  console.log('request', req);
  console.log('email', req.params.email);
  User.findOne({email: req.params.email}, function(err, user) {
    if(err) {
      res.json({
        confirmation: 'error',
        message: err
      });
      return;
    }
    if(user !== null) {
      user = user.email;
    }
    res.json({
      confirmation: 'success',
      user: user
    });
  });
});

router.post('/login', function(req, res, next) {
  loginValidation(req, res);
  return;
});

router.get('/loginSuccess', function(req, res, next) {
  res.redirect('/');
});


module.exports = router;
