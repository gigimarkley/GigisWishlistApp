//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
const Category = require("./models/Category");
const Item = require("./models/Item");
const Wishlist = require("./models/Wishlist");

//ASSOCIATIONS
//user has many wishlists
Wishlist.belongsTo(User);
User.hasMany(Wishlist);

//wishlist has many items
Item.belongsTo(Wishlist);
Wishlist.hasMany(Item);

//item belongs to one category
Item.belongsTo(Category);
Category.hasMany(Item);

//friends
User.belongsToMany(User, { as: "friends", through: "friendship" });

module.exports = {
  db,
  models: {
    User,
    Wishlist,
    Category,
    Item,
  },
};
