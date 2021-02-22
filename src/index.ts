/* INCLUDES ****************************** */
import express from 'express';
import session from 'express-session';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import passport from 'passport';
import flash from 'flash';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import passportConfig from './Middleware/Passport/config';
/* **************************************** */
/* INCLUDE ROUTES ************************ */
import example from './Components/Example';
import user from './Components/User';

/* **************************************** */

/* CONSTANTS ****************************** */
const RATELIMITHITS = 10;
const RATELIMITINTERVAL = 1 * 60 * 1000; // 1 Min
/* **************************************** */

/* INCLUDE CONFIGS ************************ */
dotenv.config();
const port = process.env.PORT || 3000
/* **************************************** */


/* SETUP APP ****************************** */
const app = express();
app.use(bodyParser());
/* **************************************** */

/* SECURITY SETUP ************************* */
// Potentiall could run only on production

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: RATELIMITINTERVAL,
  max: RATELIMITHITS,
});

// only apply to requests that begin with /api/
app.use(limiter);
app.use(helmet());
/* **************************************** */

/* SESSION SETUP ************************** */
const sesh = {
  secret: 'Oh hi there', // Replaced with proper setup in production
  cookie: {
    secure: false,
    maxAge: 60000,
  },
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sesh.cookie.secure = true; // serve secure cookies
  sesh.secret = process.env.SESSION_SECRET;
}

app.use(session(sesh));
/* **************************************** */

/* PASSPORT SETUP ************************* */
passportConfig.setup(passport);
app.use(passport.initialize());
app.use(passport.session());
/* **************************************** */

/* FLASH SETUP **************************** */
app.use(flash());
/* **************************************** */

/* DEFINE ROUTES ************************** */
app.use('/example', example);
app.use('/user', user);
/* **************************************** */

/* SERVER START *************************** */
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
/* **************************************** */

export default app;
