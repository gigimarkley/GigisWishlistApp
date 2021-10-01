const User = require("../db/models/User");

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

//I will need to reconsider this one because I don't always pass into req params
const isUser = (req, res, next) => {
  try {
    if (req.user.dataValues.id !== parseInt(req.params.userId)) {
      throw new Error("Unauthorized!");
    }
    next();
  } catch (error) {
    next(error);
  }
};

//need to add middleware that checks if user is a friend or not

module.exports = { requireToken, isUser };
