import React, { useState } from "react";
import { Button } from "./Button";
import "./Sidebar.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import {IoMdArrowDropdown} from  "react-icons/io";
// import Button from './Button'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  

  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const sidelogo = require("../assests/new-logo-removebg-preview.png");

  return (
    <>
      <nav className="navbar">
        <div className="mr-3 md:mr-5">
          {/* logo */}
          <Link to="/">
            <img
              src={sidelogo}
              alt=""
              className="w-33 h-16   lg:h-[70px] lg:w-[200px]"
            />
          </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fa fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/Services"
              className="nav-links flex flex-row"
              onClick={closeMobileMenu}
            >
              Services <IoMdArrowDropdown className=" relative top-3 ml-1" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {/* <Button/> */}
        <Link to="#" className="menu-bars text-[2rem] bg-none text-[#fff]">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <IconContext.Provider value={{ color: "#fff" }}>
          <nav className={sidebar ? "nav-menu2 active z-20" : "nav-menu2"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toogle">
                <Link
                  to="#"
                  className="menu-bars text-3xl flex justify-end mr-9 absolute right-10 top-8"
                >
                  <AiIcons.AiOutlineClose className="relative bottom-14 right-20 lg:bottom-0 lg:right-10"/>
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} className="">
                      {item.icon}
                      <span className="">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </nav>
    </>
  );
};

export default Navbar;
