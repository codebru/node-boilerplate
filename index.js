/* INCLUDES ****************************** */
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const flash = require('flash');
const bodyParser = require('body-parser');
/* **************************************** */

/* INCLUDE CONFIGS ************************ */
require('dotenv').config();
const passportConfig = require('./Utils/Passport/config');
/* **************************************** */

/* INCLUDE ROUTES ************************ */
const example = require('./Components/Example');
const user = require('./Components/User');
/* **************************************** */

/* SETUP APP ****************************** */
const app = express();
app.use(bodyParser());
/* **************************************** */

/* SESSION SETUP ************************** */
const sesh = {
  secret: 'Oh hi there', // Replaced with proper setup in production
  cookie: { secure: false },
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
