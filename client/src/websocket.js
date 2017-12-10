import openSocket from 'socket.io-client';

const state = {
  socket: null
};

export const connect = () => {
  state.socket = openSocket(
    `http://localhost:${process.env.SERVER_SOCKET_PORT_OUT}`
  );
};

const get = () => state.socket;

export default {
  connect,
  get
};
