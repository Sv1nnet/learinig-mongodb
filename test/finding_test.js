/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe test
describe('Finding records', () => {
  let char;

  // Add a character to the db before each tests
  beforeEach((done) => {
    char = new MarioChar({
      name: 'Mario',
    });
    char.save().then(() => {
      done();
    });
  });

  // Create tests
  it('Finds a record from the database', (done) => {
    MarioChar.findOne({ name: 'Mario' }).then((result) => {
      assert(result.name === 'Mario');
      done();
    });
  });

  // Create tests
  it('Find a record by id from the database', (done) => {
    MarioChar.findOne({ _id: char._id }).then((result) => {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
