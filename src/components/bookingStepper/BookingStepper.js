import React from "react";
import './BookingStepper.css';
import '../step/Step.css'
import Step from '../step/Step';

class BookingStepper extends React.Component {
  render() {
    return (
      <div className='step-list'>
        <Step number='1' name='Where & When' borderColor='orange'/>
        <Step number='2' name='Choose a Car'/>
        <Step number='3' name='Details & Payments'/>
      </div>
    );
  }
}

export default BookingStepper;
