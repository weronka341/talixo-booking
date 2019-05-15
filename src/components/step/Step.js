import React from 'react';
import './Step.css';


const Step = (props) => (
  <div className={`step ${props.borderColor}`}>
    <div className='circle'>
      <span className='number'>{props.number}</span>
    </div>
    <span className='step-name'>{props.name}</span>
  </div>
);

export default Step;
