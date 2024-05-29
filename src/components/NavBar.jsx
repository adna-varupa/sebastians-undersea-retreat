import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
    <div className="navbar">
      <Link to="/">
      <div className="company">
        <img className="icon" src="images/crab.png" alt="Logo" />
        <p id="name">Sebastian's Undersea Retreat</p> 
      </div>
      </Link>
      <div className="navbar-content">
        <Link to="/aboutus" className="part">ABOUT US</Link>
        <Link to="/contact" className="part">CONTACT</Link>
        <Link to="/login" className="part">LOGIN</Link>
        <Link to="/register" className="part">REGISTER</Link>
      </div>
    </div>
    </>
  );
};

export default NavBar;
