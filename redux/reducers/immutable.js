import { fromJS, isImmutable } from "immutable";

export const immutable = state => {
  if (state === undefined || state === null) {
    return fromJS({});
  }

  if (isImmutable(state)) {
    state = state.toJS();
  }

  return {
    todoList: todoList(state.list),
  };
};

function todoList(todo) {
  return fromJS({
    list: todo.list,
  });
}
