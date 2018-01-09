const createTrain = require('./create-train');
const getAllTrains = require('./get-all-trains');
const deleteTrain = require('./delete-train');
const getLeftTrains = require('./get-left-trains');

module.exports = {
  create: (restaurant, leader, creator, startTime) =>
    createTrain({
      restaurant,
      leader,
      creator,
      startTime
    }),
  getAll: () => getAllTrains(),
  delete: selector => deleteTrain(selector),
  getLeft: currentTime => getLeftTrains(currentTime)
};
