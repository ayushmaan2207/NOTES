import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/booknow.css';
import '../../css/RoomSection.css';

const RoomSection = () => {
  const [sortByPriceAscending, setSortByPriceAscending] = useState(false);
  const [sortByNameAscending, setSortByNameAscending] = useState(false);
  const [showPricesInUSD, setShowPricesInUSD] = useState(true);
  const [originalPricesUSD, setOriginalPricesUSD] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    initializeOriginalPrices();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [selectedRooms]);

  const initializeOriginalPrices = () => {
    const priceElements = document.querySelectorAll(".siPrice");
    const prices = Array.from(priceElements).map(element => {
      const priceText = element.textContent;
      return parseFloat(priceText.replace("$", "").replace("₹", "").trim());
    });
    setOriginalPricesUSD(prices);
  };

  const convertPriceToINR = () => {
    const priceElements = document.querySelectorAll(".siPrice");
    priceElements.forEach((element, index) => {
      const priceInUSD = originalPricesUSD[index];
      const priceInINR = priceInUSD * 82;
      element.textContent = "₹" + priceInINR.toFixed(2);
    });
  };

  const convertPriceToUSD = () => {
    const priceElements = document.querySelectorAll(".siPrice");
    priceElements.forEach((element, index) => {
      const priceInUSD = originalPricesUSD[index];
      element.textContent = "$" + priceInUSD.toFixed(2);
    });
  };

  const toggleCurrency = () => {
    setShowPricesInUSD(prev => !prev);
    if (showPricesInUSD) {
      convertPriceToINR();
    } else {
      convertPriceToUSD();
    }
  };

  const sortRoomsByName = () => {
    const ascending = !sortByNameAscending;
    setSortByNameAscending(ascending);
    const roomList = document.querySelector(".room-area");
    const rooms = Array.from(roomList.querySelectorAll(".searchItem"));
    const sortedRooms = rooms.sort((a, b) => {
      const nameA = a.querySelector(".sititle").textContent.trim().toLowerCase();
      const nameB = b.querySelector(".sititle").textContent.trim().toLowerCase();
      return ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    roomList.innerHTML = "";
    sortedRooms.forEach(room => roomList.appendChild(room));
    updateArrowIcon("item3", ascending);
  };

  const sortRoomsByPrice = () => {
    const ascending = !sortByPriceAscending;
    setSortByPriceAscending(ascending);
    const roomList = document.querySelector(".room-area");
    const rooms = Array.from(roomList.querySelectorAll(".searchItem"));
    const sortedRooms = rooms.sort((a, b) => {
      const priceA = parseFloat(a.querySelector(".siPrice").textContent.replace("$", "").replace("₹", "").trim());
      const priceB = parseFloat(b.querySelector(".siPrice").textContent.replace("$", "").replace("₹", "").trim());
      return ascending ? priceA - priceB : priceB - priceA;
    });
    roomList.innerHTML = "";
    sortedRooms.forEach(room => roomList.appendChild(room));
    updateArrowIcon("item4", ascending);
  };

  const updateArrowIcon = (itemId, ascending) => {
    const arrow = document.querySelector(`#${itemId} .arrow`);
    arrow.textContent = ascending ? "▲" : "▼";
  };

  const addRoomToSummary = (roomName) => {
    if (!selectedRooms.includes(roomName)) {
      setSelectedRooms(prevSelectedRooms => [...prevSelectedRooms, roomName]);
    }
  };

  const removeRoomFromSummary = (roomName) => {
    setSelectedRooms(prevSelectedRooms => prevSelectedRooms.filter(room => room !== roomName));
  };

  const handleAddRoomClick = (roomName) => {
    addRoomToSummary(roomName);
  };

  const handleRemoveRoomClick = (roomName) => {
    removeRoomFromSummary(roomName);
  };

  const calculateTotalPrice = () => {
    const totalPrice = selectedRooms.reduce((acc, room) => {
      const price = parseFloat(room.split('₹')[1].replace(",", "").trim());
      return acc + price;
    }, 0);
    setTotalPrice(totalPrice);
  };

  return (
    <section className="room">
      <div className="rooms">
        <div className="filter-bar">
          <div id="cont">
            <span className="material-symbols-outlined">filter_alt</span>
            <p id="fltr">Filter by :</p>
          </div>
          <ul className="filter-menu">
            <li id="item1">Sort Rooms :</li>
            <li id="item3" onClick={sortRoomsByName}>By Name <span className="arrow"></span></li>
            <li id="item4" onClick={sortRoomsByPrice}>By Price <span className="arrow"></span></li>
            <li id="item2" onClick={toggleCurrency}>Prices in {showPricesInUSD ? "INR(Rs)" : "USD($)"}</li>
            <li id="switch-price">Show Price :</li>
            <li id="item5">Per Room Per Night</li>
          </ul>
        </div>
        <div className="room-area">
          <div className="listResult">
            {/* Room 1 - Mud Room */}
            <div className="searchItem room1">
              <img src="mudroom/mudroom1.jpg" alt="room1" className="siImg" />
              <div className="siDesc">
                <h1 className="sititle">Mud Room</h1>
                <span className="siDistance">100m from center</span>
                <span className="siTaxiOp">Room Availability : 1</span>
                <span className="siSubtitle">MudRoom</span>
                <span className="siFeatures">"Room Content"</span>
                <span className="siCancelOp">
                  <img src="tick.svg" alt="" />Cancellation Policy</span>
                  <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
              </div>
              <div className="siDetails">
                <div className="siDetailTexts">
                  <span className="siPrice">$259</span>
                  <span className="siTaxOp">Includes taxes and fees</span>
                  <button className="siCheckButton" onClick={() => handleAddRoomClick("Mud Room ₹15,580")}>Add Room</button>
                </div>
              </div>
            </div>

            {/* Room 2 - Hammock */}
            <div className="searchItem room2">
              <img src="hammock/hammock2.jpg" alt="room1" className="siImg" />
              <div className="siDesc">
                <h1 className="sititle">Hammock</h1>
                <span className="siDistance">100m from center</span>
                <span className="siTaxiOp">Room Availability : 1</span>
                <span className="siSubtitle">MudRoom</span>
                <span className="siFeatures">"Room Content"</span>
                <span className="siCancelOp">
                  <img src="tick.svg" alt="" />Cancellation Policy
                </span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
              </div>
              <div className="siDetails">
                <div className="siDetailTexts">
                  <span className="siPrice">$130</span>
                  <span className="siTaxOp">Includes taxes and fees</span>
                  <button className="siCheckButton" onClick={() => handleAddRoomClick("Hammock ₹21,238")}>Add Room</button>
                </div>
              </div>
            </div>

            {/* Room 3 - Loft room */}
            <div className="searchItem room3">
              <img src="loft/loft6.jpg" alt="room1" className="siImg" />
              <div className="siDesc">
                <h1 className="sititle">Premium Wooden Room</h1>
                <span className="siDistance">100m from center</span>
                <span className="siTaxiOp">Room Availability : 1</span>
                <span className="siSubtitle">MudRoom</span>
                <span className="siFeatures">"Room Content"</span>
                <span className="siCancelOp">
                  <img src="tick.svg" alt="" />Cancellation Policy
                  </span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
              </div>
              <div className="siDetails">
                <div className="siDetailTexts">
                  <span className="siPrice">$190</span>
                  <span className="siTaxOp">Includes taxes and fees</span>
                  <button className="siCheckButton customButton" onClick={() => handleAddRoomClick("Premium Wooden Room ₹10,660")}>Add Room</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-sum">
          <h2 className="book-sum">Booking Summary</h2>
          <div className="no-roomdiv" id="no_room_selected">
            {selectedRooms.length === 0 ? (
              <>
                <span className="vres-stripe be-noroom"></span>
                <img className="noroom-img" src="https://live.ipms247.com/booking/templates/resui/img/norooms.png" alt="" />
                <h3>
                  No Room(s)<br />
                  <small>Selected</small>
                </h3>
                <div id="lookinguser" className="user_alert"></div>
              </>
            ) : (
              <div>
                <ul>
                  {selectedRooms.map((room, index) => (
                    <li key={index}>
                      {room}
                      <button className="cross_svg" onClick={() => handleRemoveRoomClick(room)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EA3323">
                          <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/>
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
                <p>Total Price: ${totalPrice.toFixed(2)}</p> {/* Display Total Price */}
                <Link to={{
                  pathname: "/checkout",
                  state: { totalPrice }  // Pass totalPrice to CheckoutPage
                }}>Proceed to Payment</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomSection;

