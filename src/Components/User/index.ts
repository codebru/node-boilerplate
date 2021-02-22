/* INCLUDES ****************************** */
import express from 'express';
import passport from 'passport';
import { isAlreadyAuthenticated } from '../../Middleware/Passport/auth';
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

export default router;
