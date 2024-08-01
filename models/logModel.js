const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  name: { type: String },
  pages: { type: String },
  book: { type: String },
  date: { type: String },
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
