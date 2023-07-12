import axios from "axios";
import {
  ADD_USER,
  GET_ALL_USER,
  GET_ALL_USER_ERROR,
  GET_ALL_USER_REQUEST,
  GET_SINGLE_USER,
} from "./actionType";
const url = "https://erin-famous-angler.cyclic.app/shunyeka/users";

export const getUsers = () => (dispatch) => {
  dispatch({ type: GET_ALL_USER_REQUEST });
  try {
    return axios.get(url).then((res) => {
      dispatch({ type: GET_ALL_USER, payload: res.data });
    });
  } catch (error) {
    dispatch({ type: GET_ALL_USER_ERROR });
  }
};

export const addUser = (obj) => (dispatch) => {
  return axios.post(`${url}`, obj).then((res) => {
    dispatch({ type: ADD_USER });
  });
};

export const getSingleUsers = (id) => (dispatch) => {
  dispatch({ type: GET_ALL_USER_REQUEST });
  try {
    return axios.get(`${url}/${id}`).then((res) => {
      dispatch({ type: GET_SINGLE_USER, payload: res.data });
    });
  } catch (error) {
    dispatch({ type: GET_ALL_USER_ERROR });
  }
};

export const deleteUser = (id) => (dispatch) => {
  try {
    return axios.delete(`${url}/${id}`).then((res) => {
      console.log("Users Deleted");
      // getUsers();
    });
  } catch (error) {
    console.log("Something went wrong");
  }
};

export const editeUsers = (obj,id) => (dispatch) => {
    dispatch({ type: GET_ALL_USER_REQUEST });
    try {
      return axios.put(`${url}/${id}`, obj).then((res) => {
        dispatch({ type: GET_SINGLE_USER, payload: res.data });
      });
    } catch (error) {
      dispatch({ type: GET_ALL_USER_ERROR });
    }
  };