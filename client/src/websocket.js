import openSocket from 'socket.io-client';
import updateAllTrains from './helpers/update-state/update-all-trains';

const state = {
  socket: null
};

export const connect = () => {
  state.socket = openSocket(`http://localhost:8000`);

  state.socket.on('client:update:allTrains', () => {
    updateAllTrains();
  });
};

const get = () => state.socket;

export default {
  connect,
  get
};
