const moment = require('moment');
const getAllTrains = require('./get-all-trains');

/**
 * Get trains which have already gone.
 *
 * @param {number} [currentTime] - Current time.
 *
 * @return {Promise}
 */
module.exports = currentTime => {
  if (currentTime === undefined) currentTime = moment();
  return getAllTrains().then(trains =>
    trains.filter(train => train.startTime < currentTime)
  );
};
