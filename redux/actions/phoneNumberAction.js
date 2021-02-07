import { USER_SIGNUP_PHONE_NUMBER } from "./actionTypes";

export const enterPhoneNumber = phoneNumber => ({
  type: USER_SIGNUP_PHONE_NUMBER,
  phoneNumber,
});
