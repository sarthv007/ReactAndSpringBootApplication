import axios from "axios";
import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCESS,
} from "../constant";

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

export const fetchPostsSucess = (data) => {
  return {
    type: FETCH_POSTS_SUCESS,
    payload: data,
  };
};

//thunk action creator or async action creator
export const fetchPosts = () => {
  return (dispatch, getState) => {
    dispatch(fetchPostsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((response) => {
        dispatch(fetchPostsSucess(response.data));
      })
      .catch((error) => {
        console.log("error from async action creator", error.message);
        dispatch(fetchPostsFailure(error.message));
      });
  };
};
