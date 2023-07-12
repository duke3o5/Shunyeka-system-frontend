import {
  ADD_USER,
  DELETE_USER,
  GET_ALL_USER,
  GET_ALL_USER_ERROR,
  GET_ALL_USER_REQUEST,
  GET_SINGLE_USER,
} from "./actionType";

const init = {
  isLoading: false,
  isError: false,
  userAdd: false,
  userDelete: false,
  users: [],
  singleUser: {},
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_ALL_USER_REQUEST:
      return { ...state, isLoading: true };

    case GET_ALL_USER:
      return { ...state, isLoading: false, users: payload };

    case GET_SINGLE_USER:
      return { ...state, isLoading: false, singleUser: payload };

    case GET_ALL_USER_ERROR:
      return { ...state, isLoading: false, isError: true };

    case DELETE_USER:
      return { ...state, userDelete: true };

    case ADD_USER:
      return { ...state, userAdd: true };

    default:
      return state;
  }
};
