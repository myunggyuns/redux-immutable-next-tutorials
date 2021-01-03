import { INCREMENT, DECREMENT } from "./actionTypes";

export const onIncrement = () => ({
  type: INCREMENT,
});

export const onDecrement = () => ({
  type: DECREMENT,
});
