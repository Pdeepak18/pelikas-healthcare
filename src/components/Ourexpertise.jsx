import React from "react";
import {Ourexpertisedata} from "../data/Ourexpertisedata";
import "../App.css"
import { Link } from "react-router-dom";
import 'animate.css';

const Ourexpertise = () => {
  return (
    <div className="bg-[#E9E9F6] relative -top-[140px] md:top-0 md:mt-14">
    <h3 className="relative  md:mt-8 md:top-0 text-3xl text-center font-bold">Our Expertise</h3>
    <div className="w-6 h-1 bg-green-400 hidden md:block	 mx-auto mt-0 md:mt-4  md:mb-2"></div>
<div className="relative  md:mt-4 md:top-0  p-8 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
    {Ourexpertisedata.map(expert =>{
        return(
            <div className=" animate__animated animate__backInLeft  border-solid border-red-500 border-2	box-shadow flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white md:max-w-xl md:flex-row">
        <img
          className="  h-[120px] lg:h-[320px]  w-full rounded-t-lg object-cover md:h-auto md:w-[250px]  md:rounded-none md:rounded-tl-[66px]"
          src={expert.image}
          alt=""
        />
        <div className="flex flex-col justify-start p-4 md:p-6">
          <h5 className="mb-2 text-xl font-medium text-black dark:text-black">
            {expert.title}
          </h5>
          <p className="mb-4 text-sm md:text-base text-black dark:text-black">
            {expert.description}.
          </p>
          <Link to="/aboutus">
            <button className="bg-blue-400 w-2/4 mt-6 md:w-fit flex items-center justify-center md:justify-start text-white py-[8px] px-[7px] rounded-md font-inherit font-bold hover:bg-red-400 transition-all duration-200">
              <a href="/aboutus" className="text-base">
                Know More
              </a>
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="w-[14px] h-[14px] ml-2 my-1"
              >
                <path
                  fill="currentColor"
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
        )
        
    })}
     
    </div>
    </div>
    
  );
};

export default Ourexpertise;
