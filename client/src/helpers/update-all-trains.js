import store from '../store';
import { updateTrainsAction } from '../actions/update-trains';
import socket from '../websocket';

const updateAllTrains = () => {
  socket().emit('server:get:allTrains', result => {
    store.dispatch(updateTrainsAction(result));
  });
};

export default updateAllTrains;
