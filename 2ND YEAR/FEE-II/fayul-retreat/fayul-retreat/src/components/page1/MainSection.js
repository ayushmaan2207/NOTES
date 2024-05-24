import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../../css/style.css'

const MainSection = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="intro">
          <div className="ir">
            <div className="iru">
              "Lorem ipsum dolor sit amet."
            </div>
            <div className="ird">
              <img src="images/map.png" alt="" />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, culpa corrupti quidem modi odio distinctio minus maiores perferendis quis minima fugit quia quod blanditiis.
              </div>
            </div>
          </div>
          <div className="il">
            <div className="hed1">
              <div className="back">welcome</div>
              <div className="front">Fayul Retreat</div>
            </div>
            <div className="contt">
              Welcome to Fayul Retreat, a premier hotel nestled in the breathtaking Kinnaur region of Himachal Pradesh, India. Experience the perfect blend of comfort, serenity, and warm hospitality amidst the picturesque landscapes. Discover a tranquil haven where every detail is crafted to ensure an unforgettable stay.
            </div>
            <div className="iimg">
              <img src="images/2.JPG" alt="" />
              <img src="images/1.JPG" alt="" />
            </div>
            <div className="contt">
              At Fayul Retreat, we strive to offer exceptional hospitality, comfortable accommodations, and top-notch amenities to ensure that every guest's stay is memorable and relaxing. Whether you are seeking a peaceful retreat or an adventurous getaway, we are dedicated to making your stay with us unforgettable.
            </div>
          </div>
        </div>

        <div id="rooms">
          <div className="hed">
            <div className="back">explore</div>
            <div className="front">Our Rooms</div>
          </div>
          <div className="rcont">
            <div className="rcard">
              <div className="rimg">
                <img src="images/1.JPG" alt="" />
              </div>
              <div className="textr">
                <div className="rtext">
                  <span className="ch">room 1</span>
                  <span className="ct">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa!</span>
                </div>
                <div className="rbook">
                  <Link to="/booknow" className="cbn">Book Now</Link>
                  <div className="cprc">
                    <span className="cu">Rs 1200</span>
                    <span className="cd">Per Night</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rcard">
              <div className="rimg">
                <img src="images/2.JPG" alt="" />
              </div>
              <div className="textr">
                <div className="rtext">
                  <span className="ch">room 2</span>
                  <span className="ct">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa!</span>
                </div>
                <div className="rbook">
                  <Link to="/booknow" className="cbn">Book Now</Link>
                  <div className="cprc">
                    <span className="cu">Rs 1200</span>
                    <span className="cd">Per Night</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rcard">
              <div className="rimg">
                <img src="images/3.JPG" alt="" />
              </div>
              <div className="textr">
                <div className="rtext">
                  <span className="ch">room 3</span>
                  <span className="ct">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa!</span>
                </div>
                <div className="rbook">
                  <Link to="/booknow" className="cbn">Book Now</Link>
                  <div className="cprc">
                    <span className="cu">Rs 1200</span>
                    <span className="cd">Per Night</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rcard">
              <div className="rimg">
                <img src="images/1.JPG" alt="" />
              </div>
              <div className="textr">
                <div className="rtext">
                  <span className="ch">room 4</span>
                  <span className="ct">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa!</span>
                </div>
                <div className="rbook">
                  <Link to="/booknow" className="cbn">Book Now</Link>
                  <div className="cprc">
                    <span className="cu">Rs 1200</span>
                    <span className="cd">Per Night</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="pages" className="insta">
          <div className="igrid">
            <div className="igc">
              <img src="images/1.JPG" alt="" />
            </div>
            <div className="igc">
              <video autoPlay muted loop>
                <source src="images/r1vid.MOV" />
              </video>
            </div>
            <div className="igc">
              <img src="images/2.JPG" alt="" />
            </div>
            <div className="igc">
              <video autoPlay muted loop>
                <source src="images/r2vid.MOV" />
              </video>
            </div>
            <div className="igc">
              <img src="images/3.JPG" alt="" />
            </div>
            <div className="igc">
              <video autoPlay muted loop>
                <source src="images/r2vid.MOV" />
              </video>
            </div>
            <div className="igc">
              <img src="images/3.JPG" alt="" />
            </div>
            <div className="igc">
              <video autoPlay muted loop>
                <source src="images/outvid.MP4" />
              </video>
            </div>
            <div className="igc">
              <img src="images/1.JPG" alt="" />
            </div>
            <div id="hide" className="igc">
              <video autoPlay muted loop>
                <source src="images/r1vid.MOV" />
              </video>
            </div>
          </div>
          <div className="itg">
            <button className="inb">
              <span>Follow us on Instagram</span>
              <i className="fa-brands fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainSection;
