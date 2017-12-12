import store from '../../store';
import socket from '../../websocket';

const updateAllTrains = callback => {
  const userState = store.get().getState().user;
  const uid = userState ? userState.uid : undefined;
  socket.get().emit('server:get:allTrains', { uid: uid }, result => {
    store.get().dispatch(updateTrainsAction(result));
    if (callback) callback();
  });
};

export default updateAllTrains;
