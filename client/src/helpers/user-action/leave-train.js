import socket from '../../websocket';
import updateAllTrains from '../update-state/update-all-trains';

const leaveTrain = (uid, trainId, callback) => {
  socket
    .get()
    .emit(
      'server:update:joinedStatus',
      { joinStatus: false, uid, trainId },
      () => {
        updateAllTrains(callback);
      }
    );
};

export default leaveTrain;
