import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCESS,
} from "../constant";

const getUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const getUsersSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCESS,
    payload: data,
  };
};

const getUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
//thunk or async action creator
export const getUsers = () => {
  return (dispatch, getState) => {
    dispatch(getUsersRequest());
    axios
      .get("http://127.0.0.1:8080/api/users")
      .then((response) => dispatch(getUsersSuccess(response.data)))
      .catch((error) => getUsersFailure(error.message));
  };
};

//for saving users to db

export const saveUserFail = (error) => {
  return {
    type: "SAVE_USER_FAIL",
    payload: error,
  };
};

export const saveUserToDb = (state) => {
  return (dispatch, getState) => {
    axios({
      method: "post",
      url: "http://127.0.0.1:8080/api/users",
      data: state,
    })
      .then((response) => {
        dispatch(getUsers());
      })
      .catch((error) => dispatch(saveUserFail(error.message)));
  };
};

//for deleting user from db

export const deleteUserFromDB = (id) => {
  return (dispatch, getState) => {
    axios({
      method: "delete",
      url: `http://127.0.0.1:8080/api/users/${id}`,
    }).then((response) => {
      dispatch(getUsers());
    });
  };
};

//for updating data inside db

export const updateUserInDB = (state, id) => {
  return (dispatch, getState) => {
    axios({
      method: "put",
      url: `http://127.0.0.1:8080/api/users/${id}`,
      data: state,
    }).then((response) => {
      dispatch(getUsers());
    });
  };
};
