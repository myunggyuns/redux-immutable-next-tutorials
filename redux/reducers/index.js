import { combineReducers } from "redux-immutable";
import counterReducer from "./counterReducer";

export const rootReducer = combineReducers({ counterReducer });
