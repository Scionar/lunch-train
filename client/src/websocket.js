import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

const getAllTrains = () => {
  console.log('emit me!');
  socket.emit('server:get:allTrains', (result) => {
    console.log(result);
  });
};

export default getAllTrains;
