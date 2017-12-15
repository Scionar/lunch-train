const getAllJoinedStatuses = require('./get-all-joined-statuses');
const getJoinedStatus = require('./get-joined-status');

module.exports = {
  getAll: () => getAllJoinedStatuses(),
  getStatus: (uid, trainId) => getJoinedStatus(uid, trainId)
};
