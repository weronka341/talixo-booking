/* global google*/
import React from "react";
import './FormWrapper.css'
import InputWrapper from "../inputWrapper/InputWrapper";
import Script from 'react-load-script';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import DayPicker from "react-day-picker";


class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickUpAddress: '',
      destinationAddress: '',
    }
  }

  searchLocation() {
    let input1 = document.getElementById('input1');
    const autocomplete1 = new google.maps.places.Autocomplete(input1);
    let input2 = document.getElementById('input2');
    const autocomplete2 = new google.maps.places.Autocomplete(input2);

  };

  render() {
    return (
      <div className='form-wrapper'>
        <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMZQ0nW2HQ7bYl4ZLzNVqYuaHI7QSxbVY&libraries=places" onLoad={()=> this.searchLocation()}/>
        <InputWrapper tip='Please provide a street address, airport name or hotel name.' text='Pick up:' inputId='input1'/>
        <InputWrapper tip='Please provide a street address, airport name or hotel name.' text='Destination:' inputId='input2'/>
        <div className='date-picker-wrapper'>
         <input className='date-picker' type='date' placeholder={new Date()}/>
        </div>

      </div>
    );
  }
}

export default FormWrapper;
