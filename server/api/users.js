const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { requireToken, isUser } = require("./middlewares");

//GET all users // anyone can access this
// /api/users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//GET single user by id // anyone can access this
// /api/users/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: ["id", "name", "username"],
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//UPDATE single user by id // only matching user can edit
// /api/users/:userId
router.put("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    res.send(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});

// //ADD single user as a friend => create an association between two users
// // /api/users/:friendId

module.exports = router;
