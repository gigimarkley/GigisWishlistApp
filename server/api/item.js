const router = require("express").Router();
const {
  models: { Item },
} = require("../db");
const { requireToken, isUser } = require("./middlewares");
module.exports = router;

//api/item/:itemId
//GET single item
router.get("/:itemId", requireToken, isUser, async (req, res, next) => {
  try {
    const singleItem = await Item.findByPk(req.params.itemId);
    res.send(singleItem);
  } catch (err) {
    next(err);
  }
});

//api/item/:itemId
//DELETE single item
router.delete("/:itemId", requireToken, async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId);
    await item.destroy();
    res.json(item);
  } catch (error) {
    next(error);
  }
});

//api/item
//ADD single item
router.post("/", requireToken, isUser, async (req, res, next) => {
  try {
    res.status(201).json(await Item.create(req.body));
  } catch (error) {
    next(error);
  }
});

//api/item/:itemId
//UPDATE single item
router.put("/:itemId", requireToken, isUser, async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId);
    res.json(await item.update(req.body));
  } catch (error) {
    next(error);
  }
});
