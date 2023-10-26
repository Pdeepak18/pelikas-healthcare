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
      <div className="w-[40%]  hidden lg:block object-cover lg:max-h-[500px] ">
        <img src={bg} alt="" className="w-full h-full" />
      </div>

      {/* data */}
      <div className="bg-[#F3F3F3]  w-full px-[30px] lg:px-[70px] py-4 lg:py-2 flex flex-col gap-7 lg:max-h-[500px]">
      
        <h1 className="text-2xl lg:text-3xl text-black font-semibold">WHY CHOOSE US</h1>
        <p className="text-black text-md lg:text-xl">
        As proud bearers of ISO and GDP compliance, we leave no stone unturned in ensuring the highest levels of safety, quality, and efficacy for our valued customers. Our state-of-the-art manufacturing units boast prestigious certifications such as WHO-GMP and GLP, reflecting our unwavering commitment to global best practices.
        </p>
        <div  className=" flex flex-col md:flex-row px-3 lg:px-6 py-2 text-black gap-[50px] lg:gap-[10px]">
          <div className="flex flex-row gap-5 ">
            <FaSuitcase color="black" size="30" />
            <div>
              <h2 className="text-xl lg:text-3xl">500+ products range.</h2>
              <p className="text-xl tracking-wide">Pharma franchise products under <br /> different divisions</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 pl-10">
            <FaTruckMoving color="black" size="30" />
            <div>
              <h2 className="text-xl lg:text-3xl">Easy Goods Tracking</h2>
              <p className="text-xl tracking-wide">We are pleased to welcome <br /> new distributors</p>
            </div>
          </div>
          
        </div>

        <div  className=" flex  flex-col md:flex-row px-3 lg:px-8 py-4 text-black gap-[50px] lg:gap-0">
          <div className="flex flex-row gap-5 ">
            <FiClock color="black" size="30" />
            <div>
              <h2 className="text-xl lg:text-3xl">Timely delivery of Goods.</h2>
              <p className="text-xl tracking-wide">Timely supply of medicine is essential in franchise business</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 ">
            <FaCertificate color="black" size="30" />
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
