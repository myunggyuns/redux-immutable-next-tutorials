import React, { useState } from "react";
import TodoListViewContainer from "./TodoListViewContainer";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../../redux/actions/actionTypes";

const TodoListContainer = () => {
  const [inputList, setInputList] = useState("");
  const dispatch = useDispatch();

  const list = useSelector(state => state.get("todolistReducer").get("list"));

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
