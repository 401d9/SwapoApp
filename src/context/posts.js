//This file is formatted by Prettier-Code formatter

// axios to make http requests
import axios from "axios";

// API from where we got the data for the posts
const API = "http://localhost:3000/home";

// the initial state
let initialState = {
  posts: [],
};

/**
 *  postsReducer reducer.
 */

const postsReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "GET_POSTS":
      return { posts: payload };

    default:
      return state;
  }
};

// export the getRemoteData functionality
export const getRemoteData = () => async (dispatch) => {
  let response = await axios.get(API);
  dispatch(getAction(response.data));
};



// export the getAction functionality
export const getAction = (data) => {
  return {
    type: "GET_POSTS",
    payload: data,
  };
};

// export the postsReducer reducer
export default postsReducer;
