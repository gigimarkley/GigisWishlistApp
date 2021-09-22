const Sequelize = require("sequelize");
const db = require("../db");

const Wishlist = db.define("wishlist", {
  total: {
    type: Sequelize.FLOAT,
    defaultValue: 0.0,
  },
});

module.exports = Wishlist;
