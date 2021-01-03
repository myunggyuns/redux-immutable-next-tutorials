import React from "react";
import { connect } from "react-redux";
import { deleteList } from "../../redux/actions/todolistAction";

const TodoListViewContainer = ({ list, deleteList }) => {
  const onClickDel = e => {
    e.preventDefault();
    deleteList(list.id);
  };

  return (
    <>
      {list.inputList && (
        <div>
          <span>{list.inputList}</span>
          <span>
            <button onClick={onClickDel}>DEL</button>
          </span>
        </div>
      )}
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    deleteList: index => dispatch(deleteList(index)),
  };
}

export default connect(null, mapDispatchToProps)(TodoListViewContainer);
