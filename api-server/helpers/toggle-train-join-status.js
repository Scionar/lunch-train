const db = require('../db');
const Join = require('../models/join/join');

/**
 * Toggle train join status.
 *
 * @param {string} uid User ID.
 * @param {string} trainId Train ID.
 */
module.exports = (uid, trainId) => {
  return Join.getStatus(uid, trainId).then(result =>
    Join.updateStatus(uid, trainId, !!result)
  );
};
