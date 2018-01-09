const ObjectId = require('mongodb').ObjectId;
const db = require('../../db');

/**
 * Remove joining documents of certain user.
 *
 * @param {Object} selector - Object with train properties.
 *
 * @return {Promise} Status of remove operation.
 */
module.exports = selector =>
  Promise.resolve()
    .then(() => Promise.resolve(filterSelector(selector)))
    .then(cleanedSelector =>
      db
        .get()
        .collection('trains')
        .remove(cleanedSelector)
    );

/*
 * Create selector to delete right train.
 *
 * @param {Object} selector - Object with train properties.
 *
 * @return {Object} Status of remove operation.
 */
const filterSelector = selector => {
  let returnSelector = {};
  Object.keys(selector).forEach(key => {
    if (key === 'id') {
      // Change id property mongoDB's _id and ObjectId compination.
      returnSelector['_id'] = new ObjectId(selector[key]);
    } else {
      returnSelector[key] = selector[key];
    }
  });
  return returnSelector;
};
