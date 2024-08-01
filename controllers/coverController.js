const Cover = require('../models/coverModel');

const coverController = {};
//middleware to log in

coverController.createCover = async (req, res, next) => {
  const { ISBN } = req.body;
  console.log('logging within createLog', 'ISBN :', ISBN);

  try {
    const newCover = new Cover({ ISBN });
    await newCover.save();
    console.log('New cover created');

    res.locals.userId = newCover.id;
    return next();
  } catch (error) {
    return next({
      log: 'Error in coverController.createCover',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};
coverController.getAllCovers = async (req, res, next) => {
  const allCovers = await Cover.find({});
  console.log('allCovers :', allCovers);
  const justISBNs = [];
  allCovers.map((coverObj) => {
    justISBNs.push(coverObj.ISBN);
  });
  res.locals.allCovers = justISBNs;
  return next();
};

module.exports = coverController;
