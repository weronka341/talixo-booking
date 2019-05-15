import React from 'react';
import './ContentWrapper.css';

const ContentWrapper = ({children}) => (
  <div className='content-wrapper '>
    {children}
  </div>
);

export default ContentWrapper;
