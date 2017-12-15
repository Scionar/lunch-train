const db = require('../../db');
const deleteJoinsOfUser = require('./delete-joins-of-user');
const Join = require('./join');

/**
 * If user is joining, add join. Id not, delete document.
 *
 * @param {string} uid User ID.
 * @param {string} trainId Train ID.
 * param {boolean} status New join status.
 *
 * @return {Promise} Promise from database action.
 */
module.exports = (uid, userName, trainId, status) => {
  if (!status) return deleteJoin(trainId, uid);
  return deleteJoinsOfUser(uid).then(() => addJoin(trainId, uid, userName));
};

/**
 * Add join to database.
 */
const addJoin = (trainId, uid, userName) =>
  db
    .get()
    .collection('joins')
    .insert({ trainId, uid, userName });

/**
 * Remove join from database.
 */
const deleteJoin = (trainId, uid) =>
  db
    .get()
    .collection('joins')
    .remove({ trainId, uid });
