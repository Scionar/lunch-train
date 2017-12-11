import openSocket from 'socket.io-client';

const state = {
  socket: null
};

export const connect = () => {
  state.socket = openSocket(`http://localhost:8000`);
};

const get = () => state.socket;

export default {
  connect,
  get
};
