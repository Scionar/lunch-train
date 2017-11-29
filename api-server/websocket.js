const socketIO = require('socket.io');
const getAllTrains = require('./helpers/get-all-trains');
const updateJoinedStatus = require('./helpers/update-joined-status');

const state = {
  webSocket: null
};

module.exports.get = () => state.webSocket;

module.exports.create = server => {
  const webSocket = socketIO(server);

  webSocket.on('connection', socket => {
    socket.on('server:get:allTrains', fn => {
      getAllTrains(result => {
        fn(result);
      });
    });

    socket.on('server:update:joinedStatus', (data, fn) => {
      updateJoinedStatus(data.uid, data.trainId, data.joinStatus).then(() => {
        fn();
      });
    });

    socket.on('disconnect', () => {
      console.log('Websocket disconnected.');
    });
  });

  webSocket.listen(8000);

  state.webSocket = webSocket;
};
