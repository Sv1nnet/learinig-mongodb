/* eslint-disable no-undef */
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe test
describe('Saving records', () => {

  // Create tests
  it('Saves a record to the database', (done) => {
    const char = new MarioChar({
      name: 'Mario',
    });

    char.save().then(() => {
      assert(char.isNew === false);
      done(); // say mocha the test completed
    });
  });
});
