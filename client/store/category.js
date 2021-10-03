import axios from "axios";

const TOKEN = "token";

//ACTION TYPES
const SET_CATEGORY = "SET_CATEGORY";

//ACTION CREATORS
export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    category,
  };
};

//THUNK CREATORS
export const fetchCategory = (catId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.get(`/api/category/${catId}`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(setCategory(data));
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
    case SET_CATEGORY:
      return action.category;
    default:
      return state;
  }
}
