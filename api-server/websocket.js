const socketIO = require('socket.io');
const getAllTrains = require('./helpers/get-all-trains');
const updateJoinedStatus = require('./helpers/update-joined-status');
const personalizeTrainData = require('./helpers/personalize-train-data');
const createTrain = require('./helpers/create-train');

const state = {
  webSocket: null
};

module.exports.get = () => state.webSocket;

module.exports.create = server => {
  const webSocket = socketIO(server);

  webSocket.on('connection', socket => {
    socket.on('server:get:allTrains', (data, fn) => {
      getAllTrains()
        .then(trains => personalizeTrainData(trains, data.uid))
        .then(result => {
          fn(result);
        });
    });

    socket.on('server:update:joinedStatus', (data, fn) => {
      updateJoinedStatus(data.uid, data.trainId, data.joinStatus).then(() => {
        fn();
      });
    });

    socket.on('server:create:train', (data, fn) => {
      console.log('At socket server:create:train');
      createTrain(data.train).then(() => {
        console.log('At callback after createTrain');
        fn();
      });
    });

    socket.on('disconnect', () => {});
  });

  webSocket.listen(8000);

  state.webSocket = webSocket;
};
