import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Encrypt from "./components/Encrypt";
import Decrypt from "./components/Decrypt";

function App() {
  return (
    <>
      <div className="App">
        <div className="colr1"></div>
        <div className="colr2"></div>
        <div className="cont">
          <div className="logo">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="container">
            <div className="top">
              {" "}
              Welcome to <span>SecureCrypt</span>,
            </div>
            <div className="bottom">
              Protect your text messages with our advanced encryption and
              decryption solutions.
            </div>
          </div>
          <div className="btns">
            <Link to="/encrypt">
              <button className="enc">Encrypt</button>
            </Link>
            <Link to="/decrypt">
              <button className="dec">Decrypt</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
