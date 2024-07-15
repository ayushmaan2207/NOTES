import "./App.css";
import Form from "./components/Form";
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
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/Form"> Form</NavLink>
          </li>
          <li>
            <NavLink to="/Counter"> Counter</NavLink>
          </li>

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
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<div>welcome to home page</div>} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="*"element={<img src="emptystate.png" alt="Page Not Found" />} />
      </Routes>
    </div>
  );
}

export default App;
