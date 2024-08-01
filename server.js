const express = require('express');
const path = require('path');
const app = express();
// const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 3001;
const logController = require('./controllers/logController');
const coverController = require('./controllers/coverController');
const pagesController = require('./controllers/pagesController');

//ADD CONTROLLERS HERE
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://allisonrm95:codesmith@clustera.aoujqbj.mongodb.net/';
const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

async function connectToMongoDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); // Exit the process with failure
  }
}
app.get('/getAll', logController.getAllLogs, (req, res) => {
  // logController.getAllLogs();
  // console.log('res.locals.allLogs inside router', res.locals.allLogs);
  return res.status(200).json(res.locals.allLogs);
});

app.post('/newEntry', logController.createLog, (req, res) => {
  return res.status(200).send();
});

app.post('/newCover', coverController.createCover, (req, res) => {
  console.log('req.body within router: ', req.body);
  // console.log('res within router :', res);
  return res.status(200).send();
});
app.get('/getCovers', coverController.getAllCovers, (req, res) => {
  console.log('res.locals.covers within router :', res.locals.allCovers);
  return res.status(200).send(res.locals.allCovers);
});

app.delete('/deleteCover', coverController.deleteCover, (req, res) => {
  console.log('logging from within delete router');
  return res.status(200).send();
});
app.put(
  '/updatePages',
  (req, res, next) => {
    console.log('Received request to update pages with body:', req.body);
    next();
  },
  pagesController.updatePages,
  (req, res) => {
    console.log('logging from within updatePages router');
    if (res.locals.newTotalPages) {
      return res.status(200).json(res.locals.newTotalPages);
    } else {
      return res.status(404).json({ message: 'Page update failed' });
    }
  }
);

// Middleware for error handling
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

// Start the server after connecting to MongoDB
connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
});
