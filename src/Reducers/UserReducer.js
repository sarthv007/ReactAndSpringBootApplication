import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCESS,
  FETCH_USERS_FAILURE,
} from "../constant";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
