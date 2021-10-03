import axios from "axios";

const TOKEN = "token";

//ACTION TYPES
const SET_ALL_WISHLISTS = "SET_ALL_WISHLISTS";

//ACTION CREATORS
export const setAllWishlists = (allWishlists) => {
  return {
    type: SET_ALL_WISHLISTS,
    allWishlists,
  };
};

//THUNK CREATORS
export const fetchAllWishlists = (userId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.get(
          `/api/wishlist/allWishlists/${userId}`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(setAllWishlists(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//REDUCER
const initialState = [];
export default function allWishlists(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_WISHLISTS:
      return action.allWishlists;
    default:
      return state;
  }
}
