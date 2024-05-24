import React, { useState} from 'react';
import { Link} from 'react-router-dom'; 
import '../../css/style.css';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleBookNowClick = () => {
    window.location.href = '/booknow';
  };

  return (
    <>
      <div className="stwa">
        <a href="https://wa.me/+918847505135?text=hello">
          <img src="images/whatsapp.png" alt="" />
        </a>
      </div>
      <header>
        <video autoPlay muted loop id="myVideo">
          <source src="images/mount.mp4" type="video/mp4" />
        </video>
        <div className="grad">
          <div className="gradt">
            <p>experience tranquil luxury at</p>
            <h1>Fayul Retreat</h1>
          </div>
        </div>
        <div className={`nav ${menuVisible? 'show1' : ''}`}>
          <div className="navup">
            <div className="logo">
              <img src="images/logo.png" alt="logo" />
            </div>
            <span className="secondary-btn" onClick={toggleMenu}>
              <i className={`material-symbols-outlined ${menuVisible? 'show2' : ''}`}>
                menu
              </i>
            </span>
          </div>
          <div className={`navdown ${menuVisible? 'show3' : ''}`}>
            <div className="lul">
              <ul>
                <li>
                  <a href="index.html">home</a>
                </li>
                <li>
                  <a href="#about">about</a>
                </li>
                <li>
                  <a href="#rooms">rooms</a>
                </li>
                <li>
                  <a href="#pages">pages</a>
                </li>
                <li>
                  <a href="#contact">contact</a>
                </li>
              </ul>
            </div>
            <hr />
            <div className="rul">
              <div>
                <h1>Welcome to </h1>
                <h1>Fayul Retreat</h1>
              </div>
              <Link to="/booknow" className="primary-btn" onClick={handleBookNowClick}>
                Book Now
              </Link>
              <div>
                <div className="fcc1">
                  <div>
                    A: Chaka road, village kalpa, district kinnaur, H.p.
                  </div>
                  <div>P: +91 9878877409</div>
                  <div>P: 9878877409</div>
                  <div>E: ayushmaan207.be22@chitkara.edu.in</div>
                </div>
                <div className="icons">
                  <button>
                    <i className="fa-brands fa-instagram" />
                  </button>
                  <button>
                    <i className="fa-brands fa-whatsapp" />
                  </button>
                  <button>
                    <i className="fa-regular fa-envelope" />
                  </button>
                  <button>
                    <i className="fa-brands fa-airbnb" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
