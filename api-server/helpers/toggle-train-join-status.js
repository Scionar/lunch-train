const db = require('../db');
const Join = require('../models/join/join');
const updateJoinedStatus = require('./update-joined-status');

/**
 * Toggle train join status.
 *
 * @param {string} uid User ID.
 * @param {string} trainId Train ID.
 */
module.exports = (uid, trainId) => {
  return Join.getStatus(uid, trainId).then(result =>
    updateJoinedStatus(uid, trainId, !!result)
  );
};
