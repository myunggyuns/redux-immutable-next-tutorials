import { fromJS } from "immutable";
import { USER_SIGNUP_PHONE_NUMBER } from "../actions/actionTypes";

export const initState = fromJS({
  phoneNumber: "010--",
});

const phoneNumberReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_SIGNUP_PHONE_NUMBER:
      return state.set("phoneNumber", action.phoneNumber);
    default:
      return state;
  }
};

export default phoneNumberReducer;
