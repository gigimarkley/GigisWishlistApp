const router = require("express").Router();
const {
  models: { Wishlist, Item },
} = require("../db");
const { requireToken, isUser } = require("./middlewares");
module.exports = router;

//api/wishlist/:wishlistId
//GET Single wishlist
router.get("/:wishlistId", requireToken, isUser, async (req, res, next) => {
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
