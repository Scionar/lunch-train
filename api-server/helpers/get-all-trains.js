const db = require('../db');

/**
 * Get all lunch trains.
 *
 * @return {Object[]} All lunch train objects.
 */
module.exports = () =>
  db
    .get()
    .collection('trains')
    .find({})
    .toArray();
