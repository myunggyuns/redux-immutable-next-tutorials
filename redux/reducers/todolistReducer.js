import { ADD, DEL } from "../actions/actionTypes";
import { fromJS } from "immutable";

const initialList = fromJS({
  list: [
    {
      id: 0,
      inputList: "",
    },
  ],
});

const counterReducer = (state = initialList, action) => {
  const getList = state.get("list");
  switch (action.type) {
    case ADD:
      return state.set(
        "list",
        getList.push({
          id: getList.toJS().length,
          inputList: action.list,
        })
      );
    case DEL:
      return state.set(
        "list",
        getList.splice(action.index, 1, { id: action.index, inputList: "" })
      );
    default:
      return state;
  }
};

export default counterReducer;
