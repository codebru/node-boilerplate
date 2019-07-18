/* INCLUDES ****************************** */
const express = require('express');
const passport = require('passport');
const { isAlreadyAuthenticated } = require('./../../Utils/Passport/auth');
/* **************************************** */

/* ROUTES ********************************* */
const router = express.Router();

router.post('/login', isAlreadyAuthenticated, (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/example',
    failureRedirect: '/error',
    failureFlash: true,
  })(req, res, next);
});
/* **************************************** */

module.exports = router;
