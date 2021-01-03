import { ADD, DEL } from "./actionTypes";

export const addList = list => ({ type: ADD, list });
export const deleteList = index => ({ type: DEL, index });
