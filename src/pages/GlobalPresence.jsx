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
        <img src={map} alt="world map" className="h-[100vh]  lg:min-h-[100vh]" />
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
              <hr className="text-white  border-2 border-white w-36 rounded-lg  mt-4 ml-3" />
              <div className="bg-white rounded-full w-7 h-7"></div>
            </div>
            <div className="flex relative gap-4">
              <hr className="text-white  border-2 border-white w-24 rounded-lg  mt-4 ml-3" />
            </div>
          </div>

          <div className="flex flex-row flex-wrap lg:flex-nowrap bg-[#4A6392] px-8 text-white gap-2 lg:gap-8 ">
            <div className="flex flex-col py-4">
              <p className="text-xl text-center">Africa</p>
              <p className="text-sm text-justify"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                labore minima, dolores fugit quos doloremque accusantium tenetur
                sint perspiciatis a.
              </p>
            </div>
            <div className="flex flex-col py-4">
              <p className="text-xl text-center">Asia</p>
              <p className="text-sm text-justify"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                labore minima, dolores fugit quos doloremque accusantium tenetur
                sint perspiciatis a.
              </p>
            </div>
            <div className="flex flex-col py-4">
              <p className="text-xl text-center">Europe</p>
              <p className="text-sm text-justify"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                labore minima, dolores fugit quos doloremque accusantium tenetur
                sint perspiciatis a.
              </p>
            </div>
            <div className="flex flex-col py-4">
              <p className="text-xl text-center">America</p>
              <p className="text-sm text-justify"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                labore minima, dolores fugit quos doloremque accusantium tenetur
                sint perspiciatis a.
              </p>
            </div>
            <div className="flex flex-col py-4">
              <p className="text-xl text-center">Ocenia</p>
              <p className="text-sm text-justify"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                labore minima, dolores fugit quos doloremque accusantium tenetur
                sint perspiciatis a.
              </p>
            </div>
            <div className="flex flex-col py-4">
              <p className="text-xl text-center ">Caribbean</p>
              <p className="text-sm  text-justify"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                labore minima, dolores fugit quos doloremque accusantium tenetur
                sint perspiciatis a.
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
