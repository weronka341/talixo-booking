import React from "react";
import './FormWrapper.css'
import InputWrapper from "../inputWrapper/InputWrapper";

class FormWrapper extends React.Component {
  render() {
    return (
      <div className='form-wrapper'>
        <InputWrapper text='Please provide a street address, airport name or hotel name.'/>
      </div>
    );
  }
}

export default FormWrapper;
