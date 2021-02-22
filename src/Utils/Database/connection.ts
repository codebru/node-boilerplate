/* INCLUDES ******************************* */
const pgPromise = require('pg-promise');
const dotenv = require('dotenv');

const pg = pgPromise();
dotenv.config();
/* **************************************** */

/* CONSTANTS ****************************** */
const {
  DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME,
} = process.env;

const connectionInfo = {
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASS,
};
/* **************************************** */

/* FUNCTIONS ****************************** */
function connect() {
  return pg(connectionInfo);
}
/* **************************************** */

/* EXPORTS ******************************** */
module.exports = { connect };
/* **************************************** */
