

import React, { useState, useEffect, useRef } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';


const Sidenav = () => {
  console.log("Isdebar open");
  const [isOpen, setIsOpen] = useState(true);
  const sideNavRef = useRef(null);
  const sidelogo = require("../assests/sidenav-logo.png")
  const sidelogo2 = require("../assests/Screenshot 2023-07-24 211935.jpg")
  const sidelogo3 = require("../assests/as-removebg-preview.png")

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setIsOpen(true);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger menu button */}
      <button
        className="fixed top-4 right-4 z-500 text-black text-2xl"
        onClick={toggleSideNav}
      >
          <GiHamburgerMenu/>
      </button>

      {/* SideNav */}
      <div
        ref={sideNavRef}
        className={`z-120 opacity-80 lg:w-56 w-full bg-gray-800 h-screen p-4 fixed left-0 top-0 transform-gpu transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center mb-4">
          <img src={sidelogo3} alt="Sidenav Logo" className="h-30 w-40" />
          {/* <span className="text-white text-lg ml-2">Sidenav</span> */}
        </div>

        {/* Navigation links */}
        <ul>
          <li className="text-white py-2 px-4  lg:hover:bg-gray-700" onClick={toggleSideNav}>
            Home
          </li>
          <li className="text-white py-2 px-4 hover:bg-gray-700" onClick={toggleSideNav}>
            About
          </li>
          <li className="text-white py-2 px-4 hover:bg-gray-700" onClick={toggleSideNav}>
            Services
          </li>
          <li className="text-white py-2 px-4 hover:bg-gray-700" onClick={toggleSideNav}>
            Contact
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;

