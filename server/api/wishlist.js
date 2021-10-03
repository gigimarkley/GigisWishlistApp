const router = require("express").Router();
const {
  models: { Wishlist, Item },
} = require("../db");
const { requireToken, isUser } = require("./middlewares");

//GET all the user's wishlists
// /api/wishlist/allWishlists/:userId
router.get("/allWishlists/:userId", async (req, res, next) => {
  try {
    const allUsersWishlists = await Wishlist.findAll({
      where: {
        userId: parseInt(req.params.userId),
      },
    });
    res.send(allUsersWishlists);
  } catch (err) {
    next(err);
  }
});

//GET all items in a wishlist
// /api/wishlist/:wishlistId
router.get("/:wishlistId", async (req, res, next) => {
  try {
    const wishlist = await Wishlist.findOne({
      where: {
        id: req.params.wishlistId,
      },
      include: [
        {
          model: Item,
        },
      ],
    });
    res.send(wishlist);
  } catch (err) {
    next(err);
  }
});

//UPDATE a wishlist
// /api/wishlist/:wishlistId
router.put("/:wishlistId", async (req, res, next) => {
  try {
    const wishlist = await Wishlist.findOne({
      where: {
        id: req.params.wishlistId,
      },
    });
    res.json(await wishlist.update(req.body));
  } catch (err) {
    next(err);
  }
});

//ADD a wishlist
// /api/wishlist/:userId
router.post("/:userId", async (req, res, next) => {
  try {
    res.status(201).json(await Wishlist.create(req.body));
  } catch (err) {
    next(err);
  }
});

//DELETE a wishlist
// /api/wishlist/:wishlistId
router.delete("/:wishlistId", async (req, res, next) => {
  try {
    const wishlist = await Wishlist.findOne({
      where: {
        id: req.params.wishlistId,
      },
    });
    res.json(await wishlist.destroy());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
