import React from "react";

const PhoneNumberView = ({ onChange, phoneNumber }) => {
  let first, second, third;

  return (
    <>
      <input
        type="text"
        value={first}
        name="first"
        onChange={e => onChange(e, 0)}
      />
      <input
        type="text"
        value={second}
        name="second"
        onChange={e => onChange(e, 1)}
      />
      <input
        type="text"
        value={third}
        name="third"
        onChange={e => onChange(e, 2)}
      />
      <button>Initialize</button>
    </>
  );
};

export default PhoneNumberView;
