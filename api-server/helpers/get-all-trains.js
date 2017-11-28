const db = require('../db');

/**
 * Get all lunch trains.
 *
 * @return {Object[]} All lunch train objects.
 */
module.exports = callback => {
  const collection = db.get().collection('trains');
  collection.find({}).toArray((err, docs) => {
    if (err) throw new Error(err);
    callback(docs);
  });
};
