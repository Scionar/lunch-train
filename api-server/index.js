require('dotenv').config();

const http = require('http');
const express = require('express');
const db = require('./db');
const webSocket = require('./websocket');

const app = express();
const server = http.Server(app);
webSocket.create(server);

app.get('/', (req, res) => {
  res.json({ msg: 'Hello world!' });
});

db.connect(() => {
  console.log('Database connected.');
  app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(`API server listening on port ${process.env.SERVER_PORT}!`);
  });
});
