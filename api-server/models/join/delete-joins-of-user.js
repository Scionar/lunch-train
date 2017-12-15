const db = require('../../db');

/**
 * Remove joining documents of certain user.
 *
 * @param {string} uid User ID.
 *
 * @return {Object[]} All join documents with right uid.
 */
module.exports = uid =>
  db
    .get()
    .collection('joins')
    .remove({ uid });
