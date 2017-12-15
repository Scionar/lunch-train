import socket from '../../websocket';
import updateAllTrains from '../update-state/update-all-trains';

const createTrain = (restaurant, leader, startTime, callback) => {
  const train = {
    restaurant,
    leader,
    startTime
  };
  socket.get().emit('server:create:train', { train }, () => {
    updateAllTrains(() => {
      if (callback !== undefined) callback();
    });
  });
};

export default createTrain;
