/* INCLUDES ******************************* */
const express = require('express');
/* **************************************** */

/* ROUTES ********************************* */
const example = express.Router();

example.get('/', (req, res) => {
  res.status(200);
  res.send('SUCCESS');
});
/* **************************************** */

/* EXPORTS ******************************** */
module.exports = example;
/* **************************************** */
