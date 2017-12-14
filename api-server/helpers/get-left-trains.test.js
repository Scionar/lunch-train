jest.mock('../db');

const moment = require('moment');
const ObjectId = require('mongodb').ObjectId;
const getLeftTrains = require('./get-left-trains');
const getAllTrains = require('./get-all-trains');
const db = require('../db');
require('dotenv').config({ path: '../.env.testing' });

const currentTime = moment()
  .hour(10)
  .valueOf();
const testTrain = {
  restaurant: 'Test restaurant for getLeftTrains',
  leader: 'Steve Stevenson',
  startTime: moment()
    .hour(8)
    .valueOf()
};

describe('getLeftTrains', () => {
  beforeAll(done => {
    db.connect(() => {
      db
        .get()
        .collection('trains')
        .insert(testTrain)
        .then(() => {
          done();
        });
    });
  });

  it('should work!', done => {
    getLeftTrains(currentTime).then(result => {
      expect(result[0].restaurant).toBe(testTrain.restaurant);
      done();
    });
  });
});
