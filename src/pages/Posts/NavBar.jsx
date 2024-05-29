import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './NavBar.css';

const NavBar = () => {
  return (
    <>
    <div className="navbar">
      <div className="company">
        <img className="icon" src="images/crab.png" alt="Logo" />
        <p id="name">Sebastian's Undersea Retreat</p> 
      </div>
      <div className="navbar-content">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="part">CONTACT</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="login" id="login">LOGIN</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="login" id="register">REGISTER</a>
      </div>
    </div>
    </>
  );
};

export default NavBar;
