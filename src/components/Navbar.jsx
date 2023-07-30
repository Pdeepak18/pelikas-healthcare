import { React, useState } from "react";
import Sidenav from "./Sidenav";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import "../App.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const sidelogo = require("../assests/new-logo-removebg-preview.png");
  const [isActive, setIsActive] = useState(false);
  const [active, setActive] = useState(false);
  let sidebar = document.getElementsByClassName("sidebar");
  const myStyle = {
    fontFamily: "Segoe UI",
  };
  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive(!isActive);
  };

  // const handleSideNavClick = (event) => {
  //   // 👇️ toggle isActive state on click
  //   // setActive(!active);
  //   return(
  //     <div>
  //       <Sidebar />
  //     </div>
  //   )

  // };
  return (
    <div className="">
      <nav className="h-15 flex flex-row p-2 md:p-5   justify-between md:justify-around">
        {/* company logo */}
        <div>
          <Link to="/">
            <img
              src={sidelogo}
              alt=""
              className="w-33 h-16   lg:h-[70px] lg:w-[200px]"
            />
          </Link>
        </div>

        {/* hamburger logo */}
        <div className="block md:hidden">
          <GiHamburgerMenu
            color="blue"
            fontSize="2rem"
            className="relative top-3 lg:top-2 p-1"
            cursor="pointer"
            onClick={handleClick}
          />
        </div>

        <div className="hidden md:block  relative top-5 ">
          <ul className="md:flex cursor-pointer text-2xl gap-8 text-gray-700 ">
            <li className=" hover:text-blue-800 font-semibold	">Home</li>
            <li className=" hover:text-blue-800 font-semibold	">About Us</li>
            <li className=" hover:text-blue-800 font-semibold	">Services</li>
            <li className=" hover:text-blue-800 font-semibold	">Contact Us</li>
            <li>
              <Sidebar
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
                className="hidden md:block"
              />
            </li>
          </ul>
        </div>
      </nav>
      <hr />

      {/* Sidebar */}
      {/* <div  className={active ? "sidebar" : "hidden"}>
    <div className="flex flex-row">
    <img src={sidelogo} alt="" className="logo w-29 h-10"  />
    <RxCross1 size={20} className="cursor-pointer"/>

    </div>
   

    <div>
      <ul>
        <li>Contact Us</li>
        <li>Contact Us</li>
        <li>Contact Us</li>
        <li>Contact Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
</div> */}

      <div
        className={
          isActive ? "bg-white py-1  px-3 text-sm border-red-50" : "hidden"
        }
      >
        <ul className="bg-gray-200 px-2 lg:hidden">
          <Link to="/">
            <li className="relative p-1  font-semibold	 hover:bg-sky-400">
              Home
              <div className="absolute w-full h-[1px] bg-black	left-0 bottom-0  "></div>
            </li>
          </Link>

          <Link to="/">
            <li className="relative p-1 font-semibold	 hover:bg-sky-400">
              Services
              <div className="absolute w-full h-[1px] bg-black	left-0 bottom-0  "></div>
            </li>
          </Link>

          <Link to="/">
            <li className="relative p-1 font-semibold	 hover:bg-sky-400">
              Certifications
              <div className="absolute w-full h-[1px] bg-black	left-0 bottom-0  "></div>
            </li>
          </Link>

          <Link to="/">
            <li className="relative p-1  font-semibold	 hover:bg-sky-400">
              Global Presence / Our Reach
              <div className="absolute w-full h-[1px] bg-black	left-0 bottom-0  "></div>
            </li>
          </Link>

          <Link to="/">
            <li className="relative p-1 font-semibold	 hover:bg-sky-400">
              Product Portfolio
              <div className="absolute w-full h-[1px] bg-black	left-0 bottom-0  "></div>
            </li>
          </Link>

          <Link to="/">
            <li className="relative p-1 font-semibold	 hover:bg-sky-400">
              Our Brands
              <div className="absolute w-full h-[1px] bg-black	left-0 bottom-0  "></div>
            </li>
          </Link>

          <Link to="/">
            <li className="relative p-1  font-semibold	 hover:bg-sky-400">
              Our Gallery
              <div className="absolute w-full h-[1px] bg-black	left-0 bottom-0  "></div>
            </li>
          </Link>

          <Link to="/">
            <li className="relative p-1  font-semibold	 hover:bg-sky-400">
              Career
              <div className="absolute w-full h-[1px] bg-black	left-0 bottom-0  "></div>
            </li>
          </Link>

          <Link to="/">
            <li className="relative p-1  font-semibold	 hover:bg-sky-400">
              Contact us
              <div className="absolute w-full h-[1px] bg-black	left-0 bottom-0  "></div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
