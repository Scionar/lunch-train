import socket from '../../websocket';
import updateAllTrains from '../update-state/update-all-trains';

const joinTrain = (uid, trainId, callback) => {
  socket
    .get()
    .emit(
      'server:update:joinedStatus',
      { joinStatus: true, uid, trainId },
      () => {
        updateAllTrains(uid, callback);
      }
    );
};

export default joinTrain;
