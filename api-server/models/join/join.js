const getAllJoinedStatuses = require('./get-all-joined-statuses');
const getJoinedStatus = require('./get-joined-status');
const deleteJoinsOfUser = require('./delete-joins-of-user');
const updateJoinedStatus = require('./update-joined-status');
const getUserJoinedStatuses = require('./get-user-joined-statuses');

module.exports = {
  getAll: () => getAllJoinedStatuses(),
  getStatus: (uid, trainId) => getJoinedStatus(uid, trainId),
  removeByUid: uid => deleteJoinsOfUser(uid),
  updateStatus: (uid, userName, trainId, status) =>
    updateJoinedStatus(uid, userName, trainId, status),
  geStatusesByUid: uid => getUserJoinedStatuses(uid)
};
