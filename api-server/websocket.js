const socketIO = require('socket.io');
const getAllTrains = require('./helpers/get-all-trains');

const state = {
  webSocket: null
};

module.exports.get = () => state.webSocket;

module.exports.create = server => {
  const webSocket = socketIO(server);

  webSocket.on('connection', socket => {
    console.log('Websocket connected!');

    socket.on('server:get:allTrains', (fn) => {
      getAllTrains((result) => {
        fn(result);
      });
    });

    socket.on('disconnect', () => {
      console.log('Websocket disconnected.');
    });
  });

  webSocket.listen(8000);

  state.webSocket = webSocket;
};
