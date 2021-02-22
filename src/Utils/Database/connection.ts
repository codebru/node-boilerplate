/* INCLUDES ******************************* */
import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

const pg = pgPromise();
dotenv.config();
/* **************************************** */

/* CONSTANTS ****************************** */
const {
  DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME,
} = process.env;

const connectionInfo = {
  host: DB_HOST,
  port: parseInt(<string>DB_PORT, 10),
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
export default connect();
/* **************************************** */
