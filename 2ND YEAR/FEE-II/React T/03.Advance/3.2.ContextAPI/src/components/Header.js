import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate =useNavigate();
  return (
    <div className="Header">
      <div className="navigate">
        <ul>
          <li onClick={()=> navigate("/")}>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
