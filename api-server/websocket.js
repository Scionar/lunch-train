const socketIO = require('socket.io');
const Train = require('./models/train/train');
const Join = require('./models/join/join');
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
      Join.updateStatus(
        data.uid,
        data.name,
        data.trainId,
        data.joinStatus
      ).then(() => {
        socket.broadcast.emit('client:update:allTrains');
        fn();
      });
    });

    socket.on('server:create:train', (data, fn) => {
      const restaurant = data.train.restaurant;
      const leader = data.train.leader;
      const creator = data.train.creator;
      const startTime = data.train.startTime;

      Train.create(restaurant, leader, creator, startTime).then(() => {
        socket.broadcast.emit('client:update:allTrains');
        fn();
      });
    });

    socket.on('disconnect', () => {});
  });

  webSocket.listen(process.env.SERVER_SOCKET_PORT);

  state.webSocket = webSocket;
};
