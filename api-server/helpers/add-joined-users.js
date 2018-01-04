const Join = require('../models/join/join');

/**
 * Add joined users to trains.
 *
 * @param {Object[]} trains Trains from database.
 * @param {String} uid Current users id.
 *
 * @return {Object[]} All lunch train objects.
 */
module.exports = (trains, uid) => {
  return Join.getAll().then(joinedList =>
    trains.map(train => {
      if (train.participants === undefined) train.participants = [];
      const trainId = train._id.toString();

      // If there is join with same trainId as currwent train, add user's name
      // to train participants.
      joinedList.forEach(join => {
        // Do not add current user to participants.
        if (join.uid !== uid) {
          if (join.trainId === trainId) train.participants.push(join.userName);
        }
      });
      return train;
    })
  );
};
