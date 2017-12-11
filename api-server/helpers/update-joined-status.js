const db = require('../db');
const deleteJoinsOfUser = require('./delete-joins-of-user');

/**
 * If user is joining, add join. Id not, delete document.
 *
 * @param {string} uid User ID.
 * @param {string} trainId Train ID.
 * param {boolean} status New join status.
 *
 * @return {Promise} Promise from database action.
 */
module.exports = (uid, trainId, status) => {
  if (!status) {
    return deleteJoin(trainId, uid);
  } else {
    return deleteJoinsOfUser(uid).then(() => addJoin(trainId, uid));
  }
};

/**
 * Add join to database.
 */
const addJoin = (trainId, uid) =>
  db
    .get()
    .collection('joins')
    .insert({ trainId, uid });

/**
 * Remove join from database.
 */
const deleteJoin = (trainId, uid) =>
  db
    .get()
    .collection('joins')
    .remove({ trainId, uid });
