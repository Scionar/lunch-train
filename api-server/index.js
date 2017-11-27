require('dotenv').config();

const express = require('express');
const db = require('./db');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Hello world!' });
});

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log('API server listening on port 3100!');
  db.connect();
});
