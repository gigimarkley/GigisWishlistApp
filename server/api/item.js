const router = require("express").Router();
const {
  models: { Item, Category },
} = require("../db");
const { requireToken, isUser } = require("./middlewares");

const { parser } = require("html-metadata-parser");
async function urlParser(url) {
  var result = await parser(url, { mode: "cors" });
  return result;
}

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
    //update image when changes are made
    const urlData = await urlParser(req.body.link);
    req.body.imageUrl = urlData.og.image;
    res.json(await item.update(req.body));
  } catch (error) {
    next(error);
  }
});

//ADD an item
// /api/item
router.post("/", async (req, res, next) => {
  try {
    //if req.body.imageUrl does not have an imageURL, use parser to grab from url
    if (!req.body.imageUrl) {
      const urlData = await urlParser(req.body.link);
      req.body.imageUrl = urlData.og.image;
    }
    //if req.body.name does not have name, use parser to grab from url
    if (req.body.name === "") {
      const urlData = await urlParser(req.body.link);
      req.body.name = urlData.og.title;
    }
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
