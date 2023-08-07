import React, { useState } from "react";
import { Button } from "./Button";
import "./Sidebar.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { IoMdArrowDropdown } from "react-icons/io";
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

  // product

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
  };

  // Subproduct

  const [active1, setActive1] = useState(false);

  const handleSubProduct1 = () => {
    setActive1(!active1);
  };

  const [active2, setActive2] = useState(false);

  const handleSubProduct2 = () => {
    setActive2(!active2);
  };

  const [active3, setActive3] = useState(false);

  const handleSubProduct3 = () => {
    setActive3(!active3);
  };

  const [active4, setActive4] = useState(false);

  const handleSubProduct4 = () => {
    setActive4(!active4);
  };

  const [active5, setActive5] = useState(false);

  const handleSubProduct5 = () => {
    setActive5(!active5);
  };

  const [active6, setActive6] = useState(false);

  const handleSubProduct6 = () => {
    setActive6(!active6);
  };
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

        <div className="menu-icon " onClick={handleClick}>
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
              to="/"
              className="nav-links flex flex-row"
              onClick={closeMobileMenu}
            >
              About Us <IoMdArrowDropdown className=" relative top-2 ml-1" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          {/* Products */}
          <li
            className="nav-item relative"
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            <Link
              to="/product"
              className="nav-links flex flex-row"
              onClick={closeMobileMenu}
            >
              Products
              <IoMdArrowDropdown className=" relative top-2 ml-1" />
            </Link>
          </li>
          {isHovering && (
            <div
              onMouseLeave={handleMouseOut}
              className="absolute top-20 left-0 bg-[#1B1919] w-[900px]  md:w-[100vw] h-min-[100px] opacity-90"
            >
              <div className=" grid  grid-cols-3 gap-10 mb-5 text-left p-10 text-white">
                <div>
                  <div onClick={handleSubProduct1}>
                    <h1 className="flex flex-row cursor-pointer">
                      ENTERAL FORMULATIONS
                      <IoMdArrowDropdown className=" relative top-2 ml-1" />
                    </h1>
                  </div>
                  {active1 && (
                    <div className="ml-5 leading-8 cursor-pointer">
                      <ul className="list-[circle] ">
                        <li>TABLETS</li>
                        <li>CAPSULES</li>
                        <li>LOZENGES</li>
                        <li>GRANULES</li>
                        <li>SUPPOSITORIES/PESSARY</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  <div onClick={handleSubProduct2}>
                    <h1 className="flex flex-row cursor-pointer">
                    PARENTAL FORMULATIONS
                      <IoMdArrowDropdown className=" relative top-2 ml-1" />
                    </h1>
                  </div>
                  {active2 && (
                    <div className="ml-5 leading-8 cursor-pointer">
                      <ul className="list-[circle] ">
                        <li>DRY POWDER INJECTABLES (VIALS/AMPS)</li>
                        <li>LIQUID INJECTABLES (VIALS/AMPS)</li>
                        <li>PREFILLED SYRINGES (PFS)</li>
                        <li>INFUSIONS</li>
                        <li>CONTRAST MEDIA</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  <div onClick={handleSubProduct3}>
                    <h1 className="flex flex-row cursor-pointer">
                    INHALATIONAL FORMULATIONS
                      <IoMdArrowDropdown className=" relative top-2 ml-1" />
                    </h1>
                  </div>
                  {active3 && (
                    <div className="ml-5 leading-8 cursor-pointer">
                      <ul className="list-[circle] ">
                        <li>REPSULES</li>
                        <li>ROTACAPS</li>
                        <li>INHALERS</li>
                        <li>NASAL SPRAYS</li>
                        
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  <div onClick={handleSubProduct4}>
                    <h1 className="flex flex-row cursor-pointer">
                    TOPICAL (SKIN/HAIR) FORMULATIONS
                      <IoMdArrowDropdown className=" relative top-2 ml-1" />
                    </h1>
                  </div>
                  {active4 && (
                    <div className="ml-5 leading-8 cursor-pointer">
                      <ul className="list-[circle] ">
                        <li>CREAM/OINTMENTS/GELS</li>
                        <li>LOTIONS/POWDER</li>
                        <li>LOZENGESSERUM/DROPS/SPRAYS</li>
                        
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  <div onClick={handleSubProduct5}>
                    <h1 className="flex flex-row cursor-pointer">
                    OPTHALMIC & ENT PRODUCTS
                      <IoMdArrowDropdown className=" relative top-2 ml-1" />
                    </h1>
                  </div>
                  {active5 && (
                    <div className="ml-5 leading-8 cursor-pointer">
                      <ul className="list-[circle] ">
                        <li>TABLETSEYE/EAR DROPS</li>
                        <li>IMPLANTS / LENSES</li>
                        <li>INTRAOCULAR SOLUTIONS</li>
                        <li>OPTHALMIC CONSUMABLES & INSTRUMENTS</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  <div onClick={handleSubProduct6}>
                    <h1 className="flex flex-row cursor-pointer">
                    OTHERS
                      <IoMdArrowDropdown className=" relative top-2 ml-1" />
                    </h1>
                  </div>
                  {active6 && (
                    <div className="ml-5 leading-8 cursor-pointer">
                      <ul className="list-[circle] ">
                        <li>SURGICAL DISPOSABLES</li>
                        <li>SURGICAL INSTRUMENTS</li>
                        <li>HOSPITAL TECHNOLOGY</li>
                        <li>HOSPITAL FURNITURE</li>
                        
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
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
                  <AiIcons.AiOutlineClose className="relative bottom-14 right-20 lg:bottom-0 lg:right-10" />
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
