const mongoose = require('mongoose');

const coverSchema = new mongoose.Schema({
  ISBN: { type: Number },
});

const Cover = mongoose.model('Cover', coverSchema);

module.exports = Cover;
