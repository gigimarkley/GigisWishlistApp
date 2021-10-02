import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import singleUser from "./singleUser";
import allWishlists from "./allwishlists";
import selectedWishlist from "./singlewishlist";

const reducer = combineReducers({
  auth,
  user: singleUser,
  allWishlists,
  selectedWishlist: selectedWishlist,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
