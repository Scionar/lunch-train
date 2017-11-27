const MongoClient = require('mongodb').MongoClient;

const state = {
  client: null
};

module.exports.connect = () => {
  const connectUrl = `mongodb://${process.env.DATABASE_USERNAME}:${
    process.env.DATABASE_PASSWORD
  }@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${
    process.env.DATABASE_NAME
  }?authSource=admin`;

  MongoClient.connect(connectUrl, function(err, db) {
    if (err) throw new Error(err);
    state.client = db;
  });
};

module.exports.disconnect = () => {
  state.client.close();
};

module.exports.get = () => state.client;
