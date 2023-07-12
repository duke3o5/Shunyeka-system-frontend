import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {reducer as userReducer} from './reducer'

const rootReducer = combineReducers({
    userReducer
  });

  export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));