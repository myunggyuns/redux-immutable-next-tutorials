import { combineReducers } from "redux-immutable";
import { HYDRATE } from "next-redux-wrapper";
import { immutable } from "./immutable";
import counterReducer from "./counterReducer";
import todolistReducer from "./todolistReducer";

const combinedReducer = combineReducers({
  counterReducer,
  todolistReducer,
});

export const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = { ...state.toJS(), ...action.payload.toJS() };
      return immutable(nextState);
    default:
      return combinedReducer(state, action);
  }
};
