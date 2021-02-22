/* INCLUDES ******************************* */
import express from 'express';
/* **************************************** */

/* ROUTES ********************************* */
const example = express.Router();

example.get('/', (req, res) => {
  res.status(200);
  res.send('SUCCESS');
});
/* **************************************** */

/* EXPORTS ******************************** */
export default example;
/* **************************************** */
