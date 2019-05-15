import React from 'react';
import './Header.css';

const Header = () => (
  <div className='header'>
    <div className='header-content'>
      <img src={process.env.PUBLIC_URL + '/talixo_logo.png'} alt='Logo' className='header-logo' height='22'
           width='123'/>
    </div>
  </div>
);

export default Header;
