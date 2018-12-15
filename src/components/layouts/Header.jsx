import React from 'react';
import logo from 'logo.svg';

const Header = props => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
    </header>
  )
}

export default Header;