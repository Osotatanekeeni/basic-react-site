import React from 'react';
import Logo from '../Images/Logo';
import '../Styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Logo />
      </div>
      <div className='nav-items'>
        <ul>
            <li className='link'><a href='/'>Home</a></li>
            <li className='link'><a href='contact'>Contact</a></li>
            <li className='link'><a href='about'>About</a></li>
        </ul>
      </div>
    </div>
  )
}
