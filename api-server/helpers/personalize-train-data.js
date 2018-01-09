const Join = require('../models/join/join');
const Train = require('../models/train/train');

/**
 * Personalize user data.
 * - Add joined status to joined trains.
 *
 * If uid is not defined, no personalization is done.
 *
 * @param {Object[]} trains Trains from database.
 * @param {string} [uid] User ID.
 *
 * @return {Object[]} All lunch train objects.
 */
module.exports = (trains, uid) => {
  if (uid !== undefined) {
    return setJoinedStatus(trains, uid).then(updatetTrains =>
      Promise.resolve(setOwnStatus(updatetTrains, uid))
    );
  }
  return Promise.resolve(trains);
};

// Add joined property to trains where user is joined.
const setJoinedStatus = (trains, uid) =>
  Join.geStatusesByUid(uid).then(trainsWithJoins => {
    const joinList = trainsWithJoins.map(join => join.trainId);
    return trains.map(train => {
      // Change joined status if current train in array.
      const trainId = train._id.toString();
      if (joinList.includes(trainId)) train.joined = true;
      return train;
    });
  });

// Add own property to trains where creator is same as
const setOwnStatus = (trains, uid) =>
  trains.map(currentTrain => {
    currentTrain.creator === uid
      ? (currentTrain.own = true)
      : (currentTrain.own = false);

    return currentTrain;
  });
