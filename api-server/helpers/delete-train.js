const ObjectId = require('mongodb').ObjectId;
const db = require('../db');

/**
 * Remove joining documents of certain user.
 *
 * @param {string} id Train ID.
 *
 * @return {Promise} Status of remove operation.
 */
module.exports = id =>
  db
    .get()
    .collection('trains')
    .remove({ _id: ObjectId(id) });
