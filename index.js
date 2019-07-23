/* INCLUDES ****************************** */
const express = require('express');
const session = require('express-session');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const passport = require('passport');
const flash = require('flash');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const passportConfig = require('./Middleware/Passport/config');
/* **************************************** */

/* CONSTANTS ****************************** */
const RATELIMITHITS = 10;
const RATELIMITINTERVAL = 1 * 60 * 1000; // 1 Min
/* **************************************** */

/* INCLUDE CONFIGS ************************ */
dotenv.config();
/* **************************************** */

/* INCLUDE ROUTES ************************ */
const example = require('./Components/Example');
const user = require('./Components/User');
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
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
/* **************************************** */
