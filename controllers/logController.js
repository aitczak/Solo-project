const Log = require('../models/logModel');

const logController = {};

logController.createLog = async (req, res, next) => {
  const { name, pages, book, date } = req.body;
  console.log('logging within createLog', name, pages, book, date);
  try {
    const newLog = new Log({ name, pages, book, date });
    await newLog.save();
    console.log('new log created');
    // res.locals.userId = newLog._id;
    return next();
  } catch (err) {
    return next({
      log: 'error in createLog',
      status: 400,
      message: `error: ${err}`,
    });
  }
};
logController.getAllLogs = async (req, res, next) => {
  const allLogs = await Log.find({});
  //   console.log('allLogs :', allLogs);
  res.locals.allLogs = allLogs;
  return next();
};

module.exports = logController;
