import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import map from "../assests/services/Map Background.jpg"
import services from "../assests/services/38(best-international).webp"

const Services = () => {
  return (
    <>
     <Navbar />
      <div className="relative min-h-[100vh]  lg:top-[18px] p-6 py-20 bg-[#EEF6FF]">
      <h3 className="text-center text-red-600 text-2xl mb-6 font-semibold">Top 10 International Courier Services</h3>
      <div className="flex flex-col lg:flex-row bg-[#EEF6FF]">
        <img src={map} alt=""  className=" lg:w-[45vw]"/>
        <img src={services} alt=""  className=" lg:w-[50vw]"/>
      </div>
      <div>
          
      </div>
      </div>
      <Footer />

    </>
  );
};

export default Services;
