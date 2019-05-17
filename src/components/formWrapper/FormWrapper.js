/* global google*/
import React from 'react';
import Script from 'react-load-script';
import './FormWrapper.css';
import InputWrapper from '../inputWrapper/InputWrapper';
import Option from '../option/Option';
import Checkbox from '../checkbox/Checkbox';


class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenOptions: true,
      pickUpAddress: '',
      destinationAddress: '',
      date: '',
      time: '',
      voucherCode: '',
      passengers: 2,
      bags: 2,
      bigLuggage: 0,
      animals: 0,
      children: 0,
      hours: 0,
    }
  }

  changeDate(e) {
    this.setState({date: e.target.value});
  }

  changeTime(e) {
    this.setState({time: e.target.value});
  }

  changeVoucherCode(e) {
    this.setState({voucherCode: e.target.value});
  }

  changePlace(e) {
    if (e.target.id === 'input1') {
      this.setState({pickUpAddress: e.target.value})
    } else {
      this.setState({destinationAddress: e.target.value})
    }
  };

  changePassengersNumber(e) {
    this.setState({passengers: e.target.value});
  }

  changeBagsNumber(e) {
    this.setState({bags: e.target.value});
  }

  changeBigLuggageNumber(e) {
    this.setState({bigLuggage: e.target.value});
  }

  changeAnimalsNumber(e) {
    this.setState({animals: e.target.value});
  }

  changeChildrenSeatsNumber(e) {
    this.setState({children: e.target.value});
  }

  changeBookingHours(e) {
    this.setState({hours: e.target.value});
  }

  showOptions() {
    this.setState({hiddenOptions: !this.state.hiddenOptions})
  }

  sendRequest() {
    const {pickUpAddress, destinationAddress, date, time} = this.state;
    if (!pickUpAddress.length) {
      alert('Start point is required!');
      return;
    }
    if (!destinationAddress.length) {
      alert('End point is required!');
      return;
    }
    if(!date || !time) {
      alert('Choose date and time!');
      return;
    }
    const today = new Date();
    const pickedDay = new Date(date);
    if (pickedDay < today || (pickedDay === today && (today.getHours() + 1) > time.getHours())) {
      alert('Booking has to be at least 60 minutes in the future!');
      return;
    }
    let requestBody = {
      pickUpAddress: pickUpAddress,
      destinationAddress: destinationAddress,
      date: date,
      time: time,
      voucherCode: this.state.voucherCode,
      passengers: this.state.passengers,
      bags: this.state.bags,
      bigLuggage: this.state.bigLuggage,
      animals: this.state.animals,
      children: this.state.children,
    };
    alert(JSON.stringify(requestBody, null, 4));
  }

  searchLocation() {
    let input1 = document.getElementById('input1');
    let autocomplete1 = new google.maps.places.Autocomplete(input1);

    autocomplete1.addListener('place_changed', function () {
      let place = autocomplete1.getPlace();
      this.setState({pickUpAddress: place});
    }.bind(this));
    console.log(this.state.pickUpAddress);
    let input2 = document.getElementById('input2');
    let autocomplete2 = new google.maps.places.Autocomplete(input2);

    autocomplete2.addListener('place_changed', function () {
      let place = autocomplete2.getPlace();
      this.setState({destinationAddress: place})
    }.bind(this));
  };

  render() {
    return (
      <div className='form-wrapper'>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMZQ0nW2HQ7bYl4ZLzNVqYuaHI7QSxbVY&libraries=places"
          onLoad={() => this.searchLocation()}/>
        <InputWrapper tip='Please provide a street address, airport name or hotel name.' text='Pick up:'
                      inputId='input1' onChange={(e) => this.changePlace(e)}/>
        <InputWrapper tip='Please provide a street address, airport name or hotel name.' text='Destination:'
                      inputId='input2' onChange={(e) => this.changePlace(e)}/>
        <div className='field-wrapper'>
          <label className='input-description'>Date: </label>
          <input className='input-style' type='date' value={this.state.date} onChange={(e) => this.changeDate(e)}/>
          <label className='input-description'>Time: </label>
          <input className='input-style' type='time' value={this.state.time} onChange={(e) => this.changeTime(e)}/>
        </div>
        <div className='field-wrapper'>
          <label className='input-description'>Voucher code (optional): </label>
          <div className='input-wrapper'>
            <input className='input-style' value={this.state.voucherCode} onChange={(e) => this.changeVoucherCode(e)}/>
          </div>
        </div>
        <p className='info'>For 1-2 passengers with 1-2 bags
          <span className='icon-holder'>
            <img alt='Arrow' src={process.env.PUBLIC_URL + '/arrow.svg'} width='27' height='17' onClick={() => {
              this.showOptions()
            }}/>
          </span>
        </p>
        {!this.state.hiddenOptions &&
        <div>
          <Option selectId='1' counter='1' max='8' labelName='Passengers:'
                  onChange={(e) => this.changePassengersNumber(e)}/>
          <Option selectId='2' counter='0' max='8' labelName='Small bags:' onChange={(e) => this.changeBagsNumber(e)}/>
          <Option selectId='3' counter='0' max='3' labelName='Big Luggage:'
                  onChange={(e) => this.changeBigLuggageNumber(e)}/>
          <Option selectId='4' counter='0' max='4' labelName='Animals:' onChange={(e) => this.changeAnimalsNumber(e)}/>
          <Option selectId='5' counter='0' max='3' labelName='Children seats:'
                  onChange={(e) => this.changeChildrenSeatsNumber(e)}/>
          <Checkbox onChange={(e) => this.changeBookingHours(e)}/>
        </div>
        }
        <button className='booking-button' onClick={() => this.sendRequest()}>Start booking</button>
      </div>
    );
  }
}

export default FormWrapper;
