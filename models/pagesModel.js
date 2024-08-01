const mongoose = require('mongoose');

const pagesSchema = new mongoose.Schema({
  totalPages: { type: Number },
});

const Pages = mongoose.model('Pages', pagesSchema);

module.exports = Pages;
