jest.mock('../db');

const cron = require('./cron');
const db = require('../db');

require('dotenv').config({ path: '../.env.testing' });

describe('cron', () => {
  beforeAll(done => {
    db.connect(() => {
      done();
    });
  });

  it('should work!', done => {
    cron(true).then(() => {
      done();
    });
  });
});
