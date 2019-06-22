/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe test
describe('Updating records', () => {
  let char;

  // Add a character to the db before each tests
  beforeEach((done) => {
    char = new MarioChar({
      name: 'Mario',
      weight: 50,
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
  it('Update a record by id from the database', (done) => {
    MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }).then(() => {
      MarioChar.findOne({ _id: char._id }).then((result) => {
        assert(result.name === 'Luigi');
        done();
      });
    });
  });

  // Create tests
  it('Increment the weight by 1', (done) => {
    MarioChar.update({}, { $inc: { weight: 1 } }).then(() => {
      MarioChar.findOne({ name: 'Mario' }).then((result) => {
        assert(result.weight === 51);
        done();
      });
    });
  });
});
