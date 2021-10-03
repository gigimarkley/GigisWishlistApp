import axios from "axios";

const TOKEN = "token";

//ACTION TYPES
const SET_ITEM = "SET_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";

//ACTION CREATORS
export const setItem = (item) => {
  return {
    type: SET_ITEM,
    item,
  };
};

export const _updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    item,
  };
};

//THUNK CREATORS
export const fetchItem = (itemId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.get(`/api/item/${itemId}`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(setItem(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateItem = (item, history) => {
  console.log(item);
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data: updated } = await axios.put(`/api/item/${item.id}`, item);
        history.goBack();
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
    case SET_ITEM:
      return action.item;
    case UPDATE_ITEM:
      return action.item;
    default:
      return state;
  }
}
