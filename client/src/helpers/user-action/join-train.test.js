import joinTrain from './join-train.js';
import socket from '../../websocket';
import store from '../../store';

describe('joinTrain#integration', () => {
  beforeAll(() => {
    socket.connect();
    store.create();
  });

  it('modifies data and changes state', done => {
    const testUid = 'testUid';
    const trainId = 'testTrainId';
    joinTrain(testUid, trainId, () => {
      const state = store.get().getState();
      const train = state['trains'].reduce((returnValue, currentValue) => {
        if (currentValue._id.toString() === trainId) return currentValue;
        return returnValue;
      });
      expect(train.joined).toBe(true);
      done();
    });
  });
});
