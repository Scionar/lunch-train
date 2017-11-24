const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Hello world!' });
});

app.listen(3100, '0.0.0.0', () => console.log('API server listening on port 3100!'));
