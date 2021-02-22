/* INCLUDES ******************************* */
import LocalStrategy from 'passport-local';
/* **************************************** */

/* VARIABLES ****************************** */
const user = {
  username: 'test-user',
  passwordHash: 'bcrypt-hashed-password',
  id: 1,
};
/* **************************************** */

/* VARIABLES ****************************** */
function setup(passport) {
  passport.use(new LocalStrategy(
    { usernameField: 'username', passwordField: 'password' }, (username, password, done) => {
      if (username === user.username
       && user.passwordHash === password) {
        done(null, true);
        return;
      }
      done(null, false);
    },
  ));

  passport.serializeUser((usr, done) => {
    done(null, usr);
  });

  passport.deserializeUser((usr, done) => {
    done(null, usr);
  });
}
/* **************************************** */

/* EXPORTS ******************************** */
export default { setup };
/* **************************************** */
