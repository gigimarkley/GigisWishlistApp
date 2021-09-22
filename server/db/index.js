//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
const Category = require("./models/Category");
const Item = require("./models/Item");
const Wishlist = require("./models/Wishlist");

//associations
//wishlist and user
Wishlist.belongsTo(User);
User.hasOne(Wishlist);

//wishlist and item
Wishlist.hasMany(Item);
Item.belongsTo(Wishlist);

//item and category
Category.hasMany(Item);
Item.belongsTo(Category);

module.exports = {
  db,
  models: {
    User,
    Wishlist,
    Category,
    Item,
  },
};
