/* INCLUDES ******************************* */
const fetch = require('node-fetch');
/* **************************************** */

/* TEST FUNCTIONS ************************* */
async function login() {
  const data = {
    username: 'test-user',
    password: 'bcrypt-hashed-password',
    id: 1,
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify(data);
  const sentiments = await fetch('http://local.pleasepickatheme.com:3000/user/login', { method: 'POST', headers, body });
  console.log(sentiments.status);
}
/* **************************************** */

/* RUN ************************************ */
login();
/* **************************************** */
