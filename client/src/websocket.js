import store from './store';
import openSocket from 'socket.io-client';
import { updateTrainsAction } from './actions/update-trains';

const state = {
  socket: null
};

export const connect = () => {
  state.socket = openSocket('http://localhost:8000');
};

const get = () => {
  return state.socket;
};

export const getAllTrains = () => {
  this.socket.emit('server:get:allTrains', result => {
    store.dispatch(updateTrainsAction(result));
  });
};

export default get;
