import axios from "axios";

const TOKEN = "token";

//ACTION TYPES
const SET_USER = "SET_USER";
const UPDATE_USER = "UPDATE_USER";

//ACTION CREATORS
export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};
export const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};

//THUNK CREATORS
export const fetchUser = (userId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.get(`/api/users/${userId}`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(setUser(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateUser = (user, history) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data: updated } = await axios.put(
          `/api/users/${user.id}`,
          user
        );
        history.push(`/account`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//REDUCER
const initialState = {};

export default function singleUser(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}
