const createTrain = require('./create-train');
const getAllTrains = require('./get-all-trains');
const deleteTrain = require('./delete-train');
const getLeftTrains = require('./get-left-trains');

module.exports = {
  create: (restaurant, leader, startTime) =>
    createTrain({
      restaurant,
      leader,
      startTime
    }),
  getAll: () => getAllTrains(),
  delete: selector => deleteTrain(selector),
  getLeft: currentTime => getLeftTrains(currentTime)
};
