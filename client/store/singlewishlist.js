import axios from "axios";

const TOKEN = "token";

//ACTION TYPES
const SET_WISHLIST = "SET_WISHLIST";
const UPDATE_WISHLIST = "UPDATE_WISHLIST ";
const ADD_WISHLIST = "ADD_WISHLIST";

//ACTION CREATORS
export const setWishlist = (wishlist) => {
  return {
    type: SET_WISHLIST,
    wishlist,
  };
};

export const updateWishlist = (wishlist) => {
  return {
    type: UPDATE_WISHLIST,
    wishlist,
  };
};

export const _addWishlist = (wishlist) => {
  return {
    type: ADD_WISHLIST,
    wishlist,
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

export const updateSingleWishlist = (wishlist) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.put(
          `/api/wishlist/${wishlist.id}`,
          wishlist
        );
        history.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addWishlist = (wishlist, history) => {
  console.log(wishlist.userId);
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.post(
          `/api/wishlist/${wishlist.userId}`,
          wishlist
        );
        dispatch(_addWishlist(data));
        history.goBack();
      }
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
    case UPDATE_WISHLIST:
      return action.wishlist;
    case ADD_WISHLIST:
      return action.wishlist;
    default:
      return state;
  }
}
