const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Hello world!' });
});

app.listen(3100, () => console.log('API server listening on port 3000!'));
