const router = require("express").Router();
const {
  models: { Category },
} = require("../db");
const { requireToken, isUser } = require("./middlewares");

//GET all the user's categories
// /api/category/:userIo
router.get("/:userId", async (req, res, next) => {
  try {
    const allUsersCategories = await Category.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.send(allUsersCategories);
  } catch (err) {
    next(err);
  }
});

//GET all items in a category
// /api/category/catId
router.get("/:catId", async (req, res, next) => {
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.catId,
      },
      include: [
        {
          model: Item,
        },
      ],
    });
    res.send(category);
  } catch (err) {
    next(err);
  }
});

//UPDATE a category
// /api/category/catId
router.put("/:catId", async (req, res, next) => {
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.catId,
      },
    });
    res.json(await category.update(req.body));
  } catch (err) {
    next(err);
  }
});

//ADD a category
// /api/category/:userId
router.post("/:userId", async (req, res, next) => {
  try {
    res.status(201).json(await Category.create(req.body));
  } catch (err) {
    next(err);
  }
});

//DELETE a category
// /api/category/catId
router.delete("/:catId", async (req, res, next) => {
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.catId,
      },
    });
    res.json(await category.destroy());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
