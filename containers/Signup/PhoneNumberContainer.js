import React from "react";
import PhoneNumberView from "../../components/PhoneNumber/PhoneNumberView";
import { connect } from "react-redux";
import { enterPhoneNumber } from "../../redux/actions/phoneNumberAction";

const PhoneNumberContainer = ({ phoneNumber, enterPhoneNumber }) => {
  const handleChange = (e, index) => {
    const {
      target: { value },
    } = e;

    if (value.length > 0 && !/^\d+$/.test(value)) {
      console.log(1);
      return;
    }

    const tokens = phoneNumber.split("-");
    tokens[index] = value;
    enterPhoneNumber(`${tokens[0]}-${tokens[1]}-${tokens[2]}`);
  };

  return (
    <>
      <PhoneNumberView phoneNumber={phoneNumber} onChange={handleChange} />
    </>
  );
};

const mapStateToProps = state => {
  const data = state.get("phoneNumberReducer").toJS();
  return {
    phoneNumber: data.phoneNumber,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    enterPhoneNumber: phoneNumber => {
      dispatch(enterPhoneNumber(phoneNumber));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneNumberContainer);
