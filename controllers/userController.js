const User = require('../models/userModel');

const userController = {};
//middleware to log in

userController.createUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({ username, password });
    await newUser.save();
    console.log('New user created');

    res.locals.userId = newUser.id;
    return next();
  } catch (error) {
    return next({
      log: 'Error in userController.createUser',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

module.exports = userController;
