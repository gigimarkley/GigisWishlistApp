import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import singleUser from "./singleUser";
import allWishlists from "./allwishlists";
import selectedWishlist from "./singlewishlist";
import singleItem from "./singleItem";
import category from "./category";

const reducer = combineReducers({
  auth,
  user: singleUser,
  allWishlists,
  selectedWishlist: selectedWishlist,
  selectedItem: singleItem,
  selectedCateory: category,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
