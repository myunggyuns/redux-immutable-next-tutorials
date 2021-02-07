import React, { useState, useEffect } from "react";
import TodoListViewContainer from "./TodoListViewContainer";
import { useStore, useDispatch } from "react-redux";
import { ADD, DEL } from "../../redux/actions/actionTypes";

const TodoListContainer = () => {
  const [inputList, setInputList] = useState("");
  const store = useStore();
  const dispatch = useDispatch();
  var list = store.getState().get("todolistReducer").get("list");

  useEffect(() => {
    console.log(list.toJS());
  }, [list]);

  const onChange = e => {
    const {
      target: { value },
    } = e;
    setInputList(value);
  };

  const onClick = e => {
    e.preventDefault();
    dispatch({ type: ADD, inputList });
    setInputList("");
  };

  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick(e);
    }
  };

  return (
    <>
      <input
        type="text"
        value={inputList}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Add List</button>
      {list &&
        list.map(data => <TodoListViewContainer list={data} key={data.id} />)}
    </>
  );
};

export default TodoListContainer;
