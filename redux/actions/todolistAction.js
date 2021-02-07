import { ADD, DEL } from "./actionTypes";

export const addList = inputList => ({ type: ADD, inputList });
export const deleteList = index => ({ type: DEL, index });
