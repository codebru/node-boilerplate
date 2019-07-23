/* INCLUDES ******************************* */
const dbConnect = require('../../Utils/Database/connection');
/* **************************************** */

/* DATABASE CONNECTION ******************** */
const db = dbConnect.connect();
/* **************************************** */

/* FUNCTIONS ****************************** */
async function create(passwordHash, email, bio, imageLink) {
  const query = {
    name: 'addUser',
    text: 'INSERT INTO users(passwordhash, email, bio, imagelink, admin) VALUES ($1, $2, $3, $4, FALSE);',
    values: [passwordHash, email, bio, imageLink],
  };
  try {
    await db.none(query);
    return true;
  } catch (err) {
    throw new Error(err);
  }
}

async function read(email) {
  const query = {
    name: 'readUser',
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  };
  try {
    return await db.one(query);
  } catch (err) {
    throw new Error(err);
  }
}

async function update(email, field, value) {
  const query = {
    name: 'updateUser',
    text: 'UPDATE users SET "$1" = "$2" WHERE email = "$3";',
    values: [field, value, email],
  };
  try {
    await db.none(query);
    return true;
  } catch (err) {
    throw new Error(err);
  }
}

async function remove() {
  const query = {
    name: 'updateUser',
    text: 'DELETE FROM users WHERE email = $1;',
    values: [email],
  };
  try {
    await db.none(query);
    return true;
  } catch (err) {
    throw new Error(err);
  }
}

/* **************************************** */

/* EXPORTS ******************************** */
module.exports = {
  create, read, update, remove,
};
/* **************************************** */
