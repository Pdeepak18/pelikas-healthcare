import React from "react";
import { FaSuitcase } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FaCertificate } from "react-icons/fa";

const Chooseus = () => {
  const myStyle = {
    fontFamily: "Segoe UI",
  };
  const bg = require("../assests/background.jpg");
  return (
    <div style={myStyle} className="flex flex-row relative -top-[140px] md:top-0 ">
      {/* image */}
      <div className="w-[40%]  hidden lg:block object-cover h-full ">
        <img src={bg} alt="" className="w-full h-full" />
      </div>

      {/* data */}
      <div className="bg-[#04A3BB] w-full px-[30px] lg:px-[70px] py-4 lg:py-2 flex flex-col gap-8">
      
        <h1 className="text-2xl lg:text-3xl text-white font-semibold">WHY CHOOSE US</h1>
        <p className="text-white text-md lg:text-xl">
          We Are The Leader Amongst Fastest Growing Pharma Companies In India.
          Maya Biotech Is Known As One Of The Best Third Party Pharmaceutical
          Manufacturing Company. Maya Biotech Is A Trusted Pharma Third Party
          Manufacturing Company.
        </p>
        <div  className=" flex flex-col md:flex-row px-3 lg:px-6 py-2 text-white gap-[50px] lg:gap-[10px]">
          <div className="flex flex-row gap-5 ">
            <FaSuitcase color="white" size="30" />
            <div>
              <h2 className="text-xl lg:text-3xl">500+ products range.</h2>
              <p className="text-xl tracking-wide">Pharma franchise products under <br /> different divisions</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 pl-10">
            <FaTruckMoving color="white" size="30" />
            <div>
              <h2 className="text-xl lg:text-3xl">Easy Goods Tracking</h2>
              <p className="text-xl tracking-wide">We are pleased to welcome <br /> new distributors</p>
            </div>
          </div>
          
        </div>

        <div  className=" flex  flex-col md:flex-row px-3 lg:px-8 py-4 text-white gap-[50px] lg:gap-0">
          <div className="flex flex-row gap-5 ">
            <FiClock color="white" size="30" />
            <div>
              <h2 className="text-xl lg:text-3xl">Timely delivery of Goods.</h2>
              <p className="text-xl tracking-wide">Timely supply of medicine is essential in franchise business</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 ">
            <FaCertificate color="white" size="30" />
            <div>
              <h2 className="text-xl lg:text-3xl">WHO-GMP Products.</h2>
              <p className="text-xl tracking-wide">We provide complete formulation of products</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
