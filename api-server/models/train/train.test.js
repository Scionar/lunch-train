require('dotenv').config({ path: '../.env.testing' });
jest.mock('../../db');

const moment = require('moment');
const db = require('../../db');
const Train = require('./train');

describe('Train model', () => {
  const exampleTrain = {
    restaurant: 'Test restaurant',
    leader: 'Steve Stevenson',
    startTime: 1513252198
  };

  beforeAll(done => {
    db.connect(() => {
      done();
    });
  });

  it('is object', () => {
    expect(typeof Train).toBe('object');
    expect(typeof Train).not.toBe(null);
  });

  it('creates train', done => {
    const restaurant = 'Create train test';
    const leader = 'Jhon Snow';
    const startTime = 1513252198;

    const getTrainsFromDBPromise = () =>
      db
        .get()
        .collection('trains')
        .find({ restaurant })
        .toArray();

    Train.create(restaurant, leader, startTime).then(() => {
      db
        .get()
        .collection('trains')
        .find({ restaurant })
        .toArray()
        .then(result => {
          const resultTrain = result[0];
          expect(typeof resultTrain).toBe('object');
          expect(resultTrain.restaurant).toBe(restaurant);
          expect(resultTrain.leader).toBe(leader);
          expect(resultTrain.startTime).toBe(startTime);
          done();
        });
    });
  });

  it('can get all the trains', done => {
    const insertTrain = () =>
      Train.create('Can get all the trains', 'Jhon Snow', 1513252198);

    const getTrainsFromDBPromise = () =>
      db
        .get()
        .collection('trains')
        .find({})
        .toArray();

    const getAllTrainsPromise = () => Train.getAll();

    Promise.resolve()
      .then(insertTrain)
      .then(() =>
        Promise.all([getTrainsFromDBPromise(), getAllTrainsPromise()])
      )
      .then(results => {
        expect(results[0]).toEqual(results[1]);
        done();
      });
  });

  it('can delete train with restaurant name', done => {
    const getTrainFromDBPromise = () =>
      db
        .get()
        .collection('trains')
        .find({ restaurant: 'Can delete train with restaurant name' })
        .toArray();

    Promise.resolve()
      .then(() =>
        Train.create(
          'Can delete train with restaurant name',
          'Jhon Snow',
          1513252198
        )
      )
      .then(() =>
        Train.delete({
          restaurant: 'Can delete train with restaurant name'
        })
      )
      .then(() => getTrainFromDBPromise())
      .then(result => {
        expect(result.length).toBe(0);
        done();
      });
  });

  // Remove test doesn't work with mongo-mock.

  // it('can delete train with id', done => {
  //   const getCreatedTrainPromise = () =>
  //     db
  //       .get()
  //       .collection('trains')
  //       .find({ restaurant: 'Can delete train with id' })
  //       .toArray();
  //
  //   Promise.resolve()
  //     .then(() =>
  //       Train.create('Can delete train with id', 'Jhon Snow', 1513252198)
  //     )
  //     .then(() => getCreatedTrainPromise())
  //     .then(result =>
  //       Train.delete({
  //         id: result[0]._id.toString()
  //       })
  //     )
  //     .then(() => getCreatedTrainPromise())
  //     .then(result2 => {
  //       console.log(result2);
  //       expect(result2.length).toBe(0);
  //       done();
  //     });
  // });

  // it('can check which ones are left', done => {
  //   Promise.resolve()
  //     .then(() => {
  //       const startTime = moment()
  //         .hour(8)
  //         .valueOf();
  //       return Train.create(
  //         'Test restaurant for getLeftTrains',
  //         'Steve Stevenson',
  //         startTime
  //       );
  //     })
  //     .then(() =>
  //       Train.getLeft().then(result => {
  //         expect(result[0].restaurant).toBe(
  //           'Test restaurant for getLeftTrains'
  //         );
  //         done();
  //       })
  //     );
  // });
});
