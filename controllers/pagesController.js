const Pages = require('../models/pagesModel');

const pagesController = {};

pagesController.updatePages = async (req, res, next) => {
  const { totalPages, updatedPages } = req.body;
  console.log('logging within updatePages', totalPages, updatedPages);
  try {
    const filter = { totalPages };
    const update = { totalPages: updatedPages };
    const newTotalPages = await Pages.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true,
    });
    console.log('new totalPages :', newTotalPages.totalPages);
    res.locals.newTotalPages = newTotalPages.totalPages;
    return next();
  } catch (err) {
    return next({
      log: 'error in updatePages',
      status: 400,
      message: `error: ${err}`,
    });
  }
};

module.exports = pagesController;
