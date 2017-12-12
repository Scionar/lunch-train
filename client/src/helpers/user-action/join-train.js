import socket from '../../websocket';
import updateAllTrains from '../update-state/update-all-trains';

const joinTrain = (uid, name, trainId, callback) => {
  socket
    .get()
    .emit(
      'server:update:joinedStatus',
      { joinStatus: true, uid, trainId, name },
      () => {
        updateAllTrains(callback);
      }
    );
};

export default joinTrain;
