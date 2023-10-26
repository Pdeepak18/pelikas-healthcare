import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import map from "../assests/services/Map Background.jpg";

const GlobalPresence = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <h2 className="uppercase text-2xl lg:text-4xl font-semibold text-center text-[#A0C6A1]">
          Travel <span className="text-[#F2C43A]">Infographics</span>{" "}
        </h2>
        <img
          src={map}
          alt="world map"
          className="h-[100vh]  lg:min-h-[100vh] object-cover"
        />
        <div className="bg-[#A0C6A1] py-8  min-h-[350px]  relative max-w-[100vw] overflow-x-hidden">
          <div className="flex flex-row gap-2  px-6 absolute top-3">
            <div className="flex relative gap-4">
              <hr className="text-white  border-2 border-white w-24 rounded-lg  mt-4 " />
              <div className="bg-white rounded-full w-7 h-7"></div>
            </div>
            <div className="flex relative gap-4">
              <hr className="text-white  border-2 border-white w-36 rounded-lg  mt-4 ml-3" />
              <div className="bg-white rounded-full w-7 h-7"></div>
            </div>
            <div className="flex relative gap-4">
              <hr className="text-white  border-2 border-white w-36 rounded-lg  mt-4 ml-3" />
              <div className="bg-white rounded-full w-7 h-7"></div>
            </div>
            <div className="flex relative gap-4">
              <hr className="text-white  border-2 border-white w-36 rounded-lg  mt-4 ml-3" />
              <div className="bg-white rounded-full w-7 h-7"></div>
            </div>
            <div className="flex relative gap-4">
              <hr className="text-white  border-2 border-white w-36 rounded-lg  mt-4 ml-3" />
              <div className="bg-white rounded-full w-7 h-7"></div>
            </div>
            <div className="flex relative gap-4">
              <hr className="text-white  border-2 border-white w-36 rounded-lg  mt-4 ml-7" />
              <div className="bg-white rounded-full w-7 h-7"></div>
            </div>
            <div className="flex relative gap-4">
              <hr className="text-white  border-2 border-white w-24 rounded-lg  mt-4 ml-4" />
            </div>
          </div>

          <div className="flex flex-row flex-wrap lg:flex-nowrap bg-[#4A6392] px-6 lg:px-8 text-white gap-2 lg:gap-7 ">
            <div className="flex flex-col py-4 lg:max-w-[200px]">
            <p className="text-xl text-center">Africa</p>
              <p className="text-sm text-center">
                Burundi, Djibouti, Ethiopia, Mali, Mauritania, Mauritius,
                Nigeria, Rwanda, Seychelles, Sierra Leone, Somalia, Tanzania
              </p>
            </div>
            <div className="flex flex-col py-4  lg:max-w-[200px]">
              
              <p className="text-xl text-center ">Asia</p>
              <p className="text-sm text-center">
                Armenia, Bahrain, Georgia, Kuwait, Kyrgyzstan, Malaysia,
                Maldives, Nepal, Oman, Philippines, Qatar, Taiwan, Thailand,
                Turkmenistan, United Arab Emirates, Yemen
              </p>
            </div>
            <div className="flex flex-col py-4 pl-8 lg:pl-0 lg:max-w-[200px]" >
              <p className="text-xl text-center ">Europe</p>
              <p className="text-sm text-center">
                Belgium, Bosnia and Herzegovina, Italy, Latvia
              </p>
            </div>
            <div className="flex flex-col py-4  lg:max-w-[200px]">
              <p className="text-xl text-center">America</p>
              <p className="text-sm text-center">
                Belize, Dominican Republic, Haiti, Honduras,Ecuador, Guatemala,
                Mexico, Paraguay, Venezuela
              </p>
            </div>
            <div className="flex flex-col py-4  lg:max-w-[200px]">
              <p className="text-xl text-center">Ocenia</p>
              <p className="text-sm text-center">
                Australia, Fiji, New Zealand, Papua New Guinea, Samoa
              </p>
            </div>
            <div className="flex flex-col py-4  lg:max-w-[200px]">
              <p className="text-xl text-center ">Caribbean</p>
              <p className="text-sm  text-center">
                Saint Kitts, Saint Lucia, Trinidad and Tobago, United States
                (including its territories in the Caribbean)
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GlobalPresence;
