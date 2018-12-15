import React from 'react';
import logo from 'logo.svg';

const Header = props => {
  return (
    <header className="header">
      <a href="/"><img src={logo} className="logo" alt="logo" /></a>
    </header>
  )
}

export default Header;