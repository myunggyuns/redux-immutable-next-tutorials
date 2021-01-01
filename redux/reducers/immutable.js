import { fromJS, isImmutable } from "immutable";

export const immutable = state => {
  if (state === undefined || state === null) {
    return fromJS({});
  }

  if (isImmutable(state)) {
    state = state.toJS();
  }

  return {
    counter: counter(state.counter),
  };
};

function counter(counter) {
  return fromJS({
    number: counter.number,
  });
}
