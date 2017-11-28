import store from './store';
import openSocket from 'socket.io-client';
import { updateTrainsAction } from './actions/update-trains';

const socket = openSocket('http://localhost:8000');

const getAllTrains = () => {
  socket.emit('server:get:allTrains', result => {
    store.dispatch(updateTrainsAction(result));
  });
};

export default getAllTrains;
