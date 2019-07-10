const example = require('express').Router();

example.get('/', (req, res) => {
  res.status(200);
  res.send('SUCCESS');
});

module.exports = example;
