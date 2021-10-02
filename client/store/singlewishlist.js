import axios from "axios";

const TOKEN = "token";

//ACTION TYPES
const SET_WISHLIST = "SET_WISHLIST";

//ACTION CREATORS
export const setWishlist = (wishlist) => {
  return {
    type: SET_WISHLIST,
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

//REDUCER
const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_WISHLIST:
      return action.wishlist;
    default:
      return state;
  }
}
