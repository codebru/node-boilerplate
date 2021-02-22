/* INCLUDES ******************************* */
import db from '../../Utils/Database/connection';
/* **************************************** */

/* **************************************** */

/* FUNCTIONS ****************************** */
async function create(passwordHash: string, email: string, bio: string, imageLink: string) {
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

async function read(email: string) {
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

async function update(passwordHash: string, email: string, bio: string, imageLink: string) {
  const query = {
    name: 'updateUser',
    text: 'UPDATE users SET passwordHash = $1, email = $2, bio = $3, imageLink = $4 WHERE email = $2;',
    values: [passwordHash, email, bio, imageLink],
  };
  try {
    await db.none(query);
    return true;
  } catch (err) {
    throw new Error(err);
  }
}

async function remove(email: string) {
  const query = {
    name: 'deleteUser',
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
export default {
  create, read, update, remove,
};
/* **************************************** */
