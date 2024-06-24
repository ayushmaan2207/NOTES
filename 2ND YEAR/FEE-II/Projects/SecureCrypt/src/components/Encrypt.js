import "./Encrypt.css";
import React, { useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Encrypt = () => {
  const [encrpt, setEnncrpt] = useState("");

  function changeHandler(event) {
    setEnncrpt(event.target.value);
  }
  function clickHandler() {
    if (encrpt.length > 0) {
      let arr = encrpt.split(" ");
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 1) {
          arr[i] = arr[i].slice(1) + arr[i][0] + "erb";
        } else if (arr[i].length === 1) {
          arr[i] += "ja";
        }
      }
      arr = arr.join(" ");
      console.log(arr);
      let ele = document.querySelector(".cr");
      ele.classList.add("created");
      ele.textContent = `${arr}`;
    }
  }
  function submitHandler(event) {
    event.preventDefault();
    setEnncrpt("");
  }
  return (
    <>
      <div className="Encrypt">
        <Link to="/">
          <button className="bkbtn">
            <TiArrowBackOutline />
          </button>
        </Link>
        <div className="clr1"></div>
        <div className="clr2"></div>
        <div className="conte">
          <div className="logoe">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="containere">
            <div className="tope">
              Welcome to <span>EnCrypt</span>,
            </div>
            <div className="bottome">
              Safeguard your text messages with our advanced encryption solutions.
            </div>
          </div>
        </div>
        <form onSubmit={submitHandler} className="btnse">
          <textarea
            value={encrpt}
            onChange={changeHandler}
            className="dece"
            placeholder="Write the text you want to Encrypt."
          ></textarea>
          <button onClick={clickHandler} className="ence">
            Encrypt
          </button>
          <div className="cr"></div>
        </form>
      </div>
    </>
  );
};

export default Encrypt;
