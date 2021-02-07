import { combineReducers } from "redux-immutable";
import counterReducer from "./counterReducer";
import todolistReducer from "./todolistReducer";
import phoneNumberReducer from "./phoneNumberReducer";

export const rootReducer = combineReducers({
  counterReducer,
  todolistReducer,
  phoneNumberReducer,
});
