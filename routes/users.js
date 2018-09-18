var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

/* GET users listing. */
router.post('/signup', function(req, res, next) {
  const signUpInfo = req.body;

  userController.signUp(signUpInfo)
    .then(user => {
      res.status(200).json({
        data: user
      })
    })
    .catch(err => {
      res.status(err.status)
        .json({
          message: err.message
        })
    });
});

module.exports = router;
