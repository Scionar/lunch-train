const db = require('../db');

/**
 * Get joined documents for certain user and train.
 *
 * @param {string} uid User ID.
 * @param {string} trainId Train ID.
 *
 * @return {Object[]} All join documents with right uid and train ID.
 */
module.exports = (uid, trainId) =>
  db
    .get()
    .collection('joins')
    .find({ trainId, uid })
    .toArray();
