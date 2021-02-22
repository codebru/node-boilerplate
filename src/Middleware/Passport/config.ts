/* INCLUDES ******************************* */
import { PassportStatic } from 'passport';
import { Strategy } from 'passport-local';
/* **************************************** */

/* VARIABLES ****************************** */
const user = {
  username: 'test-user',
  passwordHash: 'bcrypt-hashed-password',
  id: 1,
};
/* **************************************** */

// tslint:disable-next-line:no-empty-interface
interface User {}

/* VARIABLES ****************************** */
function setup(passport: PassportStatic) {
  passport.use(new Strategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    (username: string, password: string, done: Function) => {
      if (username === user.username
       && user.passwordHash === password) {
        done(null, true);
        return;
      }
      done(null, false);
    },
  ));

  passport.serializeUser((usr: User, done: Function) => {
    done(null, usr);
  });

  passport.deserializeUser((usr: User, done: Function) => {
    done(null, usr);
  });
}
/* **************************************** */

/* EXPORTS ******************************** */
export default { setup };
/* **************************************** */
