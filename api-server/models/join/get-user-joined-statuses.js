const db = require('../../db');

/**
 * Get all joined documents for certain user.
 *
 * @param {string} uid User ID.
 *
 * @return {Object[]} All join documents with right uid.
 */
module.exports = uid =>
  db
    .get()
    .collection('joins')
    .find({ uid })
    .toArray();
