const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const PORT = 3000;

//ADD CONTROLLERS HERE
const userController = require('./controllers/userController');

db = mongoose.connect('mongodb://localhost/soloproject');

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

/*
const DIST_DIR = path.join(__dirname, 'build/static');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.get('api/ping', (req, res) => {
  res.send('pong');
});

app.listen(5000);
*/
