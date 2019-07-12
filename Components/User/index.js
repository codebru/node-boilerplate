/* INCLUDES ****************************** */
const router = require('express').Router();
const passport = require('passport');
const { isAlreadyAuthenticated } = require('./../../Utils/Passport/auth');
/* **************************************** */

/* ROUTES ********************************* */
router.post('/login', isAlreadyAuthenticated, (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/example',
    failureRedirect: '/error',
    failureFlash: true,
  })(req, res, next);
});
/* **************************************** */

module.exports = router;
