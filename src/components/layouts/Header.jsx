import React from 'react';
import logo from 'logo.svg';
import { Link } from "react-router-dom";


const Header = props => {
  return (
    <header className="header">
      <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
    </header>
  )
}

export default Header;