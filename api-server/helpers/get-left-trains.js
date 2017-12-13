const moment = require('moment');
const getAllTrains = require('./get-all-trains');

module.exports = () => {
  const currentTime = moment();
  return getAllTrains().then(trains =>
    trains.filter(train => train.startTime < currentTime)
  );
};
