import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCESS,
} from "../constant";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

export const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_POSTS_SUCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
