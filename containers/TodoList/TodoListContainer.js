import React, { useState } from "react";
import { connect } from "react-redux";
import { addList } from "../../redux/actions/todolistAction";
import TodoListViewContainer from "./TodoListViewContainer";

const TodoListContainer = ({ list, addList }) => {
  const [inputList, setInputList] = useState("");
  const onChange = e => {
    const {
      target: { value },
    } = e;
    setInputList(value);
  };

  const onClick = e => {
    e.preventDefault();
    addList(inputList);
    setInputList("");
  };

  return (
    <>
      <input type="text" value={inputList} onChange={onChange} />
      <button onClick={onClick}>Add List</button>
      {list.map(data => (
        <TodoListViewContainer list={data} key={data.id} />
      ))}
    </>
  );
};

function mapStateToProps(state) {
  const mapList = state.get("todolistReducer").toJS();
  return {
    list: mapList.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addList: list => dispatch(addList(list)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
