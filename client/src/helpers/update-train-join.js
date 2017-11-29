import socket from '../websocket';

const updateTrainJoin = (joinStatus, uid, trainId) => {
  console.log('in updateTrainJoin');
  socket().emit(
    'server:update:joinedStatus',
    { joinStatus, uid, trainId },
    () => {
      console.log('Join status updatet.');
    }
  );
};

export default updateTrainJoin;
