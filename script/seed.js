"use strict";

const {
  db,
  models: { User, Category, Item, Wishlist },
} = require("../server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });

    //USERS
    const gigi = await User.create({
      username: "gigi",
      name: "Gigi",
      password: "123",
      email: "gigi@email.com",
    });

    const person2 = await User.create({
      username: "person2",
      name: "person2",
      password: "123",
      email: "person2@email.com",
    });

    //WISHLISTS
    const wishlist1 = await Wishlist.create({
      userId: gigi.id,
      public: true,
      name: "STUFF I NEED",
    });
    const wishlist3 = await Wishlist.create({
      userId: gigi.id,
      public: true,
      name: "STUFF I WANT",
    });
    const wishlist4 = await Wishlist.create({
      userId: gigi.id,
      public: true,
      name: "OTHER THINGS",
    });
    const wishlist5 = await Wishlist.create({
      userId: gigi.id,
      public: true,
      name: "COOL STUFF",
    });

    const wishlist2 = await Wishlist.create({
      userId: person2.id,
      public: true,
      name: "wishlist1",
    });

    //CATEGORIES
    const jewelry = await Category.create({ name: "jewelry", userId: gigi.id });
    const stuff = await Category.create({ name: "stuff", userId: person2.id });

    //ITEMS
    await Item.create({
      name: "Blake Necklace",
      link: "https://gorjana.com/products/blake-necklace?nosto=dynamic-frontpage-nosto-1-copy-copy-2",
      notes: "This is a thing",
      wishlistId: wishlist1.id,
      categoryId: jewelry.id,
      status: "AVAILABLE",
    });
    await Item.create({
      name: "Mermaid Blanket",
      link: "https://www.etsy.com/listing/979484126/mermaids-throw-blanket-woven-cotton?ref=hp_rf-4",
      notes: "Some notes here",
      wishlistId: wishlist1.id,
      categoryId: jewelry.id,
      status: "AVAILABLE",
    });
    await Item.create({
      name: "thing3",
      link: "https://gorjana.com/",
      notes: "Some notes here",
      wishlistId: wishlist2.id,
      categoryId: stuff.id,
      status: "AVAILABLE",
    });
  } catch (err) {
    console.log(err);
  }
};

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
