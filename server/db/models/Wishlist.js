const Sequelize = require("sequelize");
const db = require("../db");

const Wishlist = db.define("wishlist", {
  public: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
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
