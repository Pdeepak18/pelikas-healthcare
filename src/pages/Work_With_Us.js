import React from "react";
import bgImage from "../assests/about-us-assets/work-with-us.mp4";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";


export default function WorkWithUs() {
  return (
    <>
      <div>
        <video className="absolute -z-10" autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <h1 className="text-white  text-6xl font-bold">Work with us</h1>
          <div className=" w-64 h-3 bg-green-500 mt-10"></div>
          <p className="text-white mt-10 text-center">Are you interested in a career at the RMH? <br></br>Find out more about our career opportunities, education and graduate programs.</p>
          <Link to='/careers' className=" mt-32 flex p-8 bg-blue-800 text-white hover:bg-blue-500 transition-all duration-300 ">
              Know More About Careers
              <AiOutlineArrowRight className="text-2xl mt-3 ml-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
