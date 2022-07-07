import React from 'react'
import '../../App.css';
import './Header.css';
import logo from '../../assets/images/GIPHY-Logo.png'


const Header= () => {
  return (
    <header>
      <img src={logo} alt="Giphy Logo" />
      <h1>Generator</h1>
    </header>
  )
}

export default Header
