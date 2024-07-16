import "./App.css";
import Login from "./components/Login";
import Counter from "./components/Counter";
import { Route, Routes, NavLink, Link } from "react-router-dom";
// navlink active class lgayega
import { useState } from "react";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div className="App">

      
      <nav>
        <ul>
          <div className="nav">
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/Form"> Form</NavLink>
          </li>
          <li>
            <NavLink to="/Counter"> Counter</NavLink>
          </li>
          </div>

          <div className="nav">
          {!isLoggedIn && ( //jab logged in nhi hoga
            <li>
              <Link to="/Login">Log In</Link>
            </li>
          )}
          {isLoggedIn && ( //jab logged in hoga
            <li>
              <Link to="/">Log Out</Link>
            </li>
          )}
          </div>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<b className="texth">Welcome to Home Page</b>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="*"element={<img src="notfound.png" alt="Page Not Found" />} />
      </Routes>
    </div>
  );
}

export default App;
