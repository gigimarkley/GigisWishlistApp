GIGI'S WISHLIST APP

Demo: https://www.youtube.com/watch?v=iVbVC6XPLXg 

Paired with the chrome extension: https://github.com/gigimarkley/GigisWishlistChromeExtensions *This is now on the repo, under "chromeExtension"

Developer: Gillian "Gigi" Markley | github: https://github.com/gigimarkley | LinkedIn: https://www.linkedin.com/in/gillian-markley/

Design Schema: https://docs.google.com/drawings/d/1nAQqGOKDID545lXzp84hdkKfM_ryOo1hRI2ZlHk71Rk/edit?usp=sharing



To get started:
* `npm install`
* Create postgres databases named gigiswishlistapp 

## Start

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)