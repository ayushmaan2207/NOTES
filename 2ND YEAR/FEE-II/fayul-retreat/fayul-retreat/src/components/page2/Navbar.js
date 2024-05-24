import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/booknow.css';

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul className="menu">
        <li className="logo">
          <Link to="/">Fayul Retreat</Link>
        </li>
        <li className="item item-1">
          <Link to="/booknow"><span className="material-symbols-outlined">cottage</span>Home</Link>
        </li>
        <li className="item item-1">
          <a href="#rooms1"><span className="material-symbols-outlined">bed</span>Rooms</a>
        </li>
        <li className="item item-1">
          <a href="booknow"><span className="material-symbols-outlined">info</span>Hotel info</a>
        </li>
        <li className="item item-1">
          <a href="booknow"><span className="material-symbols-outlined">contacts</span>Contact Us</a>
        </li>
        <li className="item item-1">
          <a href="/"><span className="material-symbols-outlined">linked_services</span>Services</a>
        </li>
        <li className="toggle"><span className="bars"></span></li>
      </ul>
    </nav>
  );
};

export default Navbar;
