import React from "react";
import { onIncrement, onDecrement } from "../redux/actions/counterAction";
import { connect } from "react-redux";

const CounterContainer = ({ number, onDecrement, onIncrement }) => {
  return (
    <>
      <h3>{number}</h3>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
    </>
  );
};

function mapStateToProps(state) {
  const number = state.get("counterReducer");
  return {
    number: number.get("number"),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(onIncrement()),
    onDecrement: () => dispatch(onDecrement()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
