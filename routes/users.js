var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  const signUpInfo = req.body;
  userController.signUp(signUpInfo)
    .then(user => console.log(user))
    .catch(err => console.log(err));
});

module.exports = router;
