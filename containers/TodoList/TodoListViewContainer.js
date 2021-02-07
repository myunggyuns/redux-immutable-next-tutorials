import React from "react";
import { useDispatch } from "react-redux";
import { DEL } from "../../redux/actions/actionTypes";

const TodoListViewContainer = ({ list }) => {
  const dispatch = useDispatch();

  const onClickDel = (e, index) => {
    e.preventDefault();
    dispatch({ type: DEL, index });
  };

  return (
    <>
      <div>
        <span>{list.inputList}</span>
        <span>
          <button onClick={e => onClickDel(e, list.id)}>DEL</button>
        </span>
      </div>
    </>
  );
};

export default TodoListViewContainer;
