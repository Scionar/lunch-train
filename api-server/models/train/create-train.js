const db = require('../../db');

/**
 * Create train.
 *
 * @param {Object} trainData Train JSON obect.
 *
 * @return {Promise} Promise from database action.
 */
module.exports = trainData =>
  db
    .get()
    .collection('trains')
    .insert({ ...trainData });
