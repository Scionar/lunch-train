const Train = require('../models/train/train');

/**
 * Poor man's cron job. Run here checks with interval.
 *
 * @param {Boolean} runOnce Run cron jobs once without time interval.
 *
 * @return {Promise}
 */
module.exports = runOnce => {
  if (runOnce === undefined || runOnce === false) {
    const cronInterval = process.env.CRON_INTERVAL | (1000 * 30);
    setInterval(function() {
      cronJob();
    }, cronInterval);
  } else {
    return cronJob();
  }
};

/**
 * Cron job.
 */
const cronJob = () => checkLeftTrains();

/**
 * Check left trains.
 */
const checkLeftTrains = () =>
  Train.getLeft().then(leftTrains => {
    if (leftTrains.length) return handleLeftTrains(leftTrains);
    return Promise.resolve();
  });

/**
 * Handle left trains.
 */
const handleLeftTrains = trains =>
  Promise.all(
    trains.map(train => {
      return Train.delete({ id: train._id.toString() });
    })
  );
