const socketIO = require('socket.io');
const Train = require('./models/train/train');
const updateJoinedStatus = require('./helpers/update-joined-status');
const personalizeTrainData = require('./helpers/personalize-train-data');
const addJoinedUsers = require('./helpers/add-joined-users');

const state = {
  webSocket: null
};

module.exports.get = () => state.webSocket;

module.exports.create = server => {
  const webSocket = socketIO(server);

  webSocket.on('connection', socket => {
    socket.on('server:get:allTrains', (data, fn) => {
      Train.getAll()
        .then(trains => personalizeTrainData(trains, data.uid))
        .then(trains => addJoinedUsers(trains, data.uid))
        .then(result => {
          fn(result);
        });
    });

    socket.on('server:update:joinedStatus', (data, fn) => {
      updateJoinedStatus(
        data.uid,
        data.name,
        data.trainId,
        data.joinStatus
      ).then(() => {
        fn();
      });
    });

    socket.on('server:create:train', (data, fn) => {
      const restaurant = data.train.restaurant;
      const leader = data.train.leader;
      const startTime = data.train.startTime;
      console.log(startTime, 'startTime');

      Train.create(restaurant, leader, startTime).then(() => {
        fn();
      });
    });

    socket.on('disconnect', () => {});
  });

  webSocket.listen(process.env.SERVER_SOCKET_PORT);

  state.webSocket = webSocket;
};
