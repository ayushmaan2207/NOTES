import React from 'react';
import '../../css/booknow.css';

const Container = () => {
  return (
    <div className="container">
      <img id="display-img" src="hotel itself/hotel4.jpg" className="roomImage" alt="" />
      <img id="logo-img" src="logo.png" alt="logo-img" />
      {/* Search bar */}
      <div className="search section">
        <div className="sectionContainer">
          <div className="searchInputs">
            <div className="align-boxes">
              {/* Check in */}
              <div className="singleInput">
                <div className="texts">
                  <h4>Check in</h4>
                  <input type="date" placeholder="DD/MM/YY" value="2024-04-06" />
                </div>
              </div>
              {/* Check out */}
              <div className="singleInput">
                <div className="texts">
                  <h4>Check out</h4>
                  <input type="date" placeholder="DD/MM/YY" value="2024-04-07" />
                </div>
              </div>
            </div>
            {/* check availability */}
            <button id="rooms1">
              <a href="res1.html" style={{ color: 'black', textDecoration: 'none' }}>Check Rooms</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
