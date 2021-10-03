const Sequelize = require("sequelize");
const db = require("../db");

const Wishlist = db.define("wishlist", {
  public: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Wishlist;
