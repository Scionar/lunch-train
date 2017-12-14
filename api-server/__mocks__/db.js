const MongoClient = require('mongo-mock').MongoClient;

const state = {
  client: null
};

module.exports.connect = callback => {
  const connectUrl = `mongodb://${process.env.DATABASE_ROOT_USERNAME}:${
    process.env.DATABASE_ROOT_PASSWORD
  }@${process.env.DATABASE_CONNECTION_HOST}:${
    process.env.DATABASE_CONNECTION_PORT
  }/${process.env.DATABASE_NAME}?authSource=admin`;

  MongoClient.connect(connectUrl, function(err, db) {
    if (err) throw new Error(err);
    state.client = db;
    callback();
  });
};

module.exports.disconnect = () => {
  state.client.close();
};

module.exports.get = () => state.client;
