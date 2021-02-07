import { ADD, DEL } from "../actions/actionTypes";
import { fromJS, List } from "immutable";

const initialList = fromJS({
  id: 0,
  list: List(),
});

const counterReducer = (state = initialList, action) => {
  const getList = state.get("list");

  switch (action.type) {
    case ADD:
      return state
        .set(
          "list",
          getList.push({
            id: state.get("id"),
            inputList: action.inputList,
          })
        )
        .set("id", state.get("id") + 1);

    case DEL:
      return state.set(
        "list",
        getList.delete(
          state.get("list").findIndex(item => item.id === action.index)
        )
      );

    default:
      return state;
  }
};

export default counterReducer;
