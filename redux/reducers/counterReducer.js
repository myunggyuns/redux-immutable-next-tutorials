import { INCREMENT, DECREMENT } from "../actions/actionTypes";
import { fromJS } from "immutable";

const initialNumber = fromJS({
  number: 0,
});

const conterReducer = (state = initialNumber, action) => {
  const number = state.get("number");
  switch (action.type) {
    case INCREMENT:
      return state.set("number", number + 1);
    case DECREMENT:
      return state.set("number", number - 1);
    default:
      return state;
  }
};

export default conterReducer;
