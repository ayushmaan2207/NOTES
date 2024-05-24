import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import { Helmet } from 'react-helmet';
import Navbar from './Navbar'; 
import Container from './Container';
import RoomSection from './RoomSection';
import Cookie from './cookie';

const BookNow = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/booknow') {
      document.title = 'Fayul Resort - Book Now';
    } else {
      document.title = 'Fayul Retreat : Experience tranquil luxury';
    }
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
   // Function to handle navbar sticky behavior
   const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  return (
    <main>
      <Helmet>
        {/* Font Awesome */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />

        {/* Nav Icons */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        {/* Icons */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        {/* Roboto Font */}
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

        {/* jQuery */}
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>
      </Helmet>
      <Navbar /> 
      <Container/>
      <RoomSection/>
      <Cookie/>

    </main>
  );
};

export default BookNow;
