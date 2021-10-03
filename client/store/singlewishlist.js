import axios from "axios";

const TOKEN = "token";

//ACTION TYPES
const SET_WISHLIST = "SET_WISHLIST";
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

//ACTION CREATORS
export const setWishlist = (wishlist) => {
  return {
    type: SET_WISHLIST,
    wishlist,
  };
};
export const _addItem = (item) => {
  return {
    type: ADD_ITEM,
    item,
  };
};

export const _deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    item,
  };
};

//THUNK CREATORS
export const fetchSingleWishlist = (wishlistId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.get(`/api/wishlist/${wishlistId}`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(setWishlist(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addItem = (item, history) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data: created } = await axios.post("/api/item", item);
      }
      dispatch(_addItem(created));
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };
};
export const deleteItem = (itemId) => {
  return async (dispatch) => {
    try {
      const { data: item } = await axios.delete(`/api/item/${itemId}`);
      dispatch(_deleteItem(item));
    } catch (err) {
      console.log(err);
    }
  };
};

//REDUCER
const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_WISHLIST:
      return action.wishlist;
    case ADD_ITEM:
      return { ...state, items: [...state, action.item] };
    case DELETE_ITEM:
      let items = state.items.filter((item) => item.id !== action.item.id);
      return { ...state, items: items };
    default:
      return state;
  }
}
