const db = require('../db');
const getJoinedStatus = require('./get-joined-status');
const updateJoinedStatus = require('./update-joined-status');

/**
 * Toggle train join status.
 *
 * @param {string} uid User ID.
 * @param {string} trainId Train ID.
 */
module.exports = (uid, trainId) => {
  return getJoinedStatus().then(result =>
    updateJoinedStatus(uid, trainId, !!result)
  );
};
