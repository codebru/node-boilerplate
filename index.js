const app = require('express')();
const example = require('./Components/Example');

//  Connect all our routes to our application
app.use('/example', example);

// Turn on that server!
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
