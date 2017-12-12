const getUserJoinedStatuses = require('./get-user-joined-statuses');

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
    return getUserJoinedStatuses(uid)
      .then(result => result.map(join => join.trainId)) // Flat joined statuses to an array of train IDs.
      .then(joined =>
        trains.map(train => {
          // Change joined status if current train in array.
          const trainId = train._id.toString();
          if (joined.includes(trainId)) train.joined = true;
          return train;
        })
      );
  }
  return Promise.resolve(trains);
};
