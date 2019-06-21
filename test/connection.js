const mongoose = require('mongoose');

// Connect to the db before tests run
before((done) => {
  // Connect to mongodb
  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection
    .once('open', () => {
      console.log('Connection has been made, now make fireworks...');
      done(); // Tell mocha the connection has been made
    })
    .on('error', (error) => {
      console.log('Connection error:', error);
    });
});

// Drop the characters collection before each test (drop - delete)
beforeEach((done) => {
  // Drop the collection
  mongoose.connection.collections.mariochars.drop(() => {
    done();
  });
});
