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
import { MdOutlineFormatListBulleted } from "react-icons/md";

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

  const sidelogo = require("../assests/Pelikas Healthcare Logo_finmal.png");

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

  // sidebar
  const [act, setAct] = useState(false);
  const handlesubitemfunc = () => {
    setAct(!act);
  };

  // mobile
  const [isActive, setIsActive] = useState(false);

  const handleClickmob = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive(!isActive);
  };
  return (
    <div className="">
      <nav className=" hidden md:block  ">
        <div className={`  py-12 h-[80px] flex flex-row justify-around items-center text-[1.2rem] z-[100]`}>
          <div className="mr-3 md:mr-5">
            {/* logo */}
            <Link to="/">
              <img
                src={sidelogo}
                alt=""
                className="w-33 h-16   lg:h-[50px] lg:w-[200px]"
              />
            </Link>
          </div>

          <ul className={click ? "nav-menu active " : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links " onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/about-pelikas-healthcare/"
                className="nav-links flex flex-row "
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              {/* {dropdown && <Dropdown />} */}
            </li>

            {/* Products */}
            <li
              className="nav-item relative"
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
            >
              <Link
                to="/products"
                className="nav-links flex flex-row"
                onClick={closeMobileMenu}
              >
                Product-Portfolio
                <IoMdArrowDropdown className=" relative top-2 ml-1" />
              </Link>
            </li>
            {isHovering && (
              <div
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
                className="absolute top-20 left-0 bg-[#1B1919] w-[900px]  md:w-[100vw] h-min-[100px] opacity-90 z-[9999]"
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
                          <li>
                            <a href="/products/enteral-formulation">TABLETS</a>
                          </li>
                          <li>
                            <a href="/products/enteral-formulation">CAPSULES</a>
                          </li>
                          <li>
                            <a href="/products/enteral-formulation">LOZENGES</a>
                          </li>
                          <li>
                            <a href="/products/enteral-formulation">GRANULES</a>
                          </li>
                          <li>
                            <a href="/products/enteral-formulation">
                              SUPPOSITORIES/PESSARY
                            </a>
                          </li>
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
                          <li>
                            <a href="/products/parenteral-formulations">
                              DRY POWDER INJECTABLES (VIALS/AMPS)
                            </a>
                          </li>
                          <li>
                            <a href="/products/parenteral-formulations">
                              LIQUID INJECTABLES (VIALS/AMPS)
                            </a>
                          </li>
                          <li>
                            <a href="/products/parenteral-formulations">
                              PREFILLED SYRINGES (PFS)
                            </a>
                          </li>
                          <li>
                            <a href="/products/parenteral-formulations">
                              INFUSIONS
                            </a>
                          </li>
                          <li>
                            <a href="/products/parenteral-formulations">
                              CONTRAST MEDIA
                            </a>
                          </li>
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
                          <li>
                            <a href="/products/inhalational-formulations">
                              REPSULES
                            </a>
                          </li>
                          <li>
                            <a href="/products/inhalational-formulations">
                              ROTACAPS
                            </a>
                          </li>
                          <li>
                            <a href="/products/inhalational-formulations">
                              INHALERS
                            </a>
                          </li>
                          <li>
                            <a href="/products/inhalational-formulations">
                              NASAL SPRAYS
                            </a>
                          </li>
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
                          <li>
                            <a href="/products/topical-formulations">
                              CREAM/OINTMENTS/GELS
                            </a>
                          </li>
                          <li>
                            <a href="/products/topical-formulations">
                              LOTIONS/POWDER
                            </a>
                          </li>
                          <li>
                            <a href="/products/topical-formulations">
                              LOZENGESSERUM/DROPS/SPRAYS
                            </a>
                          </li>
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
                          <li>
                            <a href="/products/opthlamic-formulations">
                              TABLETSEYE/EAR DROPS
                            </a>
                          </li>
                          <li>
                            <a href="/products/opthlamic-formulations">
                              IMPLANTS / LENSES
                            </a>
                          </li>
                          <li>
                            <a href="/products/opthlamic-formulations">
                              INTRAOCULAR SOLUTIONS
                            </a>
                          </li>
                          <li>
                            <a href="/products/opthlamic-formulations">
                              OPTHALMIC CONSUMABLES & INSTRUMENTS
                            </a>
                          </li>
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
                          <li>
                            <a href="/products/others">SURGICAL DISPOSABLES</a>
                          </li>
                          <li>
                            <a href="/products/others">SURGICAL INSTRUMENTS</a>
                          </li>
                          <li>
                            <a href="/products/others">HOSPITAL TECHNOLOGY</a>
                          </li>
                          <li>
                            <a href="/products/others">HOSPITAL FURNITURE</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
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
          </ul>
          {/* <Button/> */}
          <Link to="#" className="menu-bars text-[2rem] bg-none text-black">
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
        </div>
      </nav>

      <div className="block md:hidden z-1000 md:-mb-28">
        <nav className="">
          <div className="relative w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex items-center justify-between ">
            <Link to="/">
              <div>
                <a href="/" className="cursor-pointer py-7 pr-7 block">
                  <img src={sidelogo} alt="" width="200" height="30" />
                </a>
                <p></p>
              </div>
            </Link>

            <div>
              {/* Side icon for small screen */}
              <div className="flex gap-5 lg:hidden">
                <MdOutlineFormatListBulleted
                  fontSize="2rem"
                  color="black"
                  className="bg-salmon cursor-pointer"
                  onClick={handleClickmob}
                />
              </div>
            </div>
          </div>
        </nav>

        <div className={isActive ? "  bg-[#4C73A5]" : "hidden"}>
          <div className="relative w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex items-center justify-between lg:hidden">
            <ul className=" font-semibold ">
              <Link to="/">
                <li className="text-black relative py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                  {" "}
                  <a href="/" className="text-xl">
                    Home
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>
              </Link>
              <Link to="/about-pelikas-healthcare/">
                <li className="text-black relative font-inherit py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                  {" "}
                  <a href="/about-pelikas-healthcare/" className="text-xl">
                    About Us
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>
              </Link>
              <Link to="/about-pelikas-healthcare/mission-and-value/">
                <li className="text-black relative font-inherit py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                  <a href="/about-pelikas-healthcare/mission-and-value/" className="text-xl">
                    Mission And Values
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>
              </Link>
              <Link to="/products">
                <li className="text-black relative font-inherit py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                  <a href="/products" className="text-xl">
                    Our Products
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>
              </Link>

              <Link to="/global-presence">
                <li className="text-black relative font-inherit py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                  <a href="/products" className="text-xl">
                    Global Presence
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>
              </Link>
              <Link to="/careers">
                <li className="text-black relative font-inherit py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                  <a href="/products" className="text-xl">
                    Career
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>
              </Link>
              <Link to="/services">
                <li className="text-black relative font-inherit py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                  <a href="/products" className="text-xl">
                    Services
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>
              </Link>
              <Link to="/services" className="pointer-evnet-none">
                <li className="text-black  pointer-evnet-none relative font-inherit py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                  <a href="/products" className="text-xl">
                    Blogs And Media Corner
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>
              </Link>
              <Link to="/services" className="pointer-evnet-none">
                <li className="text-black relative pointer-evnet-none font-inherit py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                  <a href="/products" className="text-xl">
                    Investors
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>
              </Link>

              <Link to="/contact-us">
                <li className="text-black relative font-inherit py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                  <a href="/products" className="text-xl">
                    Contact-us
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
