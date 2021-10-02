const router = require("express").Router();
const {
  models: { Item, Category },
} = require("../db");
const { requireToken, isUser } = require("./middlewares");

//GET single item
// /api/item/itemId
router.get("/:itemId", async (req, res, next) => {
  try {
    const singleItem = await Item.findByPk(req.params.itemId);
    res.send(singleItem);
  } catch (err) {
    next(err);
  }
});

//UPDATE an item
// /api/item/itemId
router.put("/:itemId", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId);
    res.json(await item.update(req.body));
  } catch (error) {
    next(error);
  }
});

//ADD an item
// /api/item
router.post("/", async (req, res, next) => {
  try {
    res.status(201).json(await Item.create(req.body));
  } catch (error) {
    next(error);
  }
});

//DELETE an item
// /api/item/itemId
router.delete("/:itemId", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId);
    await item.destroy();
    res.json(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
