import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import map from "../assests/services/Map Background.jpg";
import services from "../assests/services/38(best-international).webp";
import Cargo from "../assests/services/services2/cargo.webp";
import Emirate from "../assests/services/services2/cargo/Emirates.png";
import  American_Airlines  from "../assests/services/services2/cargo/American_Airlines.png";
import  cop  from "../assests/services/services2/cargo/COPA(CM).png";
import  EtihadAirlines  from "../assests/services/services2/cargo/Ethiopian Airlines.png";
import  EtihadCargo  from "../assests/services/services2/cargo/Etihad Cargo (EY).png";
import  airarabia  from "../assests/services/services2/cargo/Air_Arabia(G9).png";
import  LufthansaCargo  from "../assests/services/services2/cargo/Lufthansa Cargo (LH).png";
import  QatarAirways from "../assests/services/services2/cargo/Qatar Airways (QR).png";
import  SingaporeAirlines  from "../assests/services/services2/cargo/Singapore Airlines (SQ).png";
import  TurkishAirlines  from "../assests/services/services2/cargo/Turkish Airlines (TK).png";
import  UnitedCargo  from "../assests/services/services2/cargo/United Cargo (UA).png";
import  flydubaiCargo  from "../assests/services/services2/cargo/flydubai Cargo (FZ).jpg";


// sea

import sea from "../assests/services/services2/sea/sea_1.jpg"
import res from "../assests/services/services2/sea/123.avif"
import a  from "../assests/services/services2/sea/ARAMEX.png";
import b  from "../assests/services/services2/sea/BLUEDART.jpg";
import c  from "../assests/services/services2/sea/COSCO SHIPPING.png";
import d  from "../assests/services/services2/sea/DELHIVERY.png";
import e  from "../assests/services/services2/sea/DHL.png";
import f  from "../assests/services/services2/sea/EMS.png";
import g  from "../assests/services/services2/sea/Ecom Express.png";
import h  from "../assests/services/services2/sea/FedEx.png";
import i  from "../assests/services/services2/sea/Hapag Llyod.png";
import j  from "../assests/services/services2/sea/MAERSK.png";
import k  from "../assests/services/services2/sea/Matson Inc.jpg";
import l  from "../assests/services/services2/sea/Orient Overseas.png";
import m  from "../assests/services/services2/sea/Safexpress.png";
import n  from "../assests/services/services2/sea/TCI EXPRESS.png";
import o  from "../assests/services/services2/sea/Track on.png";
import p  from "../assests/services/services2/sea/UPS.png";
import q  from "../assests/services/services2/sea/VRL Logistics.png";
import r  from "../assests/services/services2/sea/ZIM Integrated Shipping.jpg";
const Services = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const additionalServices = [
    "Third-Party Manufacturing Supply",
    "Pharmaceutical Company Supply",
    "Cold Chain Supply",
    "Private Patient Supply",
    "Hospital Supply",
    "Government supply",
    "NGOs Supply",
    "Bulk Pharma Exports",
    "Drop Shipping points",
  ];

  return (
    <>
      <Navbar />
      <div className="relative min-h-[100vh]   p-6 py-20 bg-[#EEF6FF] flex flex-col mx-auto">
       
        <div className="flex flex-col mx-auto">
          <h3 className="text-center text-red-600 text-4xl mb-6 font-semibold">
            Top 10 International Courier Services
          </h3>
          <div className="flex flex-col lg:flex-row bg-[#EEF6FF]">
            <img src={map} alt="" className=" lg:w-[45vw]" />
            <img src={services} alt="" className=" lg:w-[50vw]" />
          </div>
        </div>


        <div className="flex flex-col mx-auto mt-8">
          <h3 className="text-center text-red-600 text-2xl items-center lg:text-4xl mb-6 font-semibold">
            International Air Cargo
          </h3>
          <div className="flex flex-col lg:flex-row bg-[#EEF6FF]">
          
            <div className=" lg:p-8 flex flex-col gap-2 lg:gap-4 item-left lg:items-center">
              <div className="flex gap-2 lg:gap-4">
                <div className="bg-white border shadow-md border-white rounded-lg w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={Emirate} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img
                    src={airarabia}
                    alt=""
                    className="object-cover w-[100%] lg:w-[80%]"
                  />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={cop} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={EtihadAirlines} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
              </div>

              <div className="flex gap-2 lg:gap-4 flex-wrap lg:flex-nowrap">
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={flydubaiCargo} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img
                    src={QatarAirways}
                    alt=""
                    className="object-cover w-[100%] lg:w-[80%]"
                  />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={UnitedCargo} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={TurkishAirlines} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={LufthansaCargo} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="  lg:hidden bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={SingaporeAirlines} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="lg:hidden bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={EtihadCargo} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="lg:hidden bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={American_Airlines} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                
              </div>
              <div className="hidden lg:flex gap-2 lg:gap-4">
              <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={SingaporeAirlines} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={EtihadCargo} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={American_Airlines} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
              </div>
              {/* <div className="bg-white border border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                <img src={Emirate} alt="" className="object-cover w-[100%] lg:w-[80%]" />
              </div> */}
            </div>
            <img src={Cargo} alt="" className="w-[45%]" />
          </div>
        </div>


{/* sea cargo */}
        <div className="flex flex-col mx-auto mt-8">
          <h3 className="text-center text-red-600 text-2xl items-center lg:text-4xl mb-6 font-semibold capitalize">
          INTERNATIONAL SEA CARGO AND COURIER

          </h3>
          <div className="flex flex-col lg:flex-row bg-[#EEF6FF]">
          <img src={sea} alt="" className="w-[45%]" />
            <div className=" lg:p-8 flex flex-col gap-2 lg:gap-4 item-left lg:items-center">
              <div className="flex gap-2 lg:gap-4">
                <div className="bg-white border shadow-md border-white rounded-lg w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={a} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img
                    src={b}
                    alt=""
                    className="object-cover w-[100%] lg:w-[80%]"
                  />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={b} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={d} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
              </div>

              <div className="flex gap-2 lg:gap-4 flex-wrap lg:flex-nowrap">
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={e} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img
                    src={f}
                    alt=""
                    className="object-cover w-[100%] lg:w-[80%]"
                  />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={g} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={h} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={i} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="  lg:hidden bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={j} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="lg:hidden bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={k} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="lg:hidden bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={l} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                
              </div>
              <div className="hidden lg:flex gap-2 lg:gap-4">
              <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={m} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={n} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border shadow-md border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                  <img src={o} alt="" className="object-cover w-[100%] lg:w-[80%]" />
                </div>
                <div className="bg-white border border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                <img src={q} alt="" className="object-cover w-[100%] lg:w-[80%]" />
              </div>
              
              </div>
              <div className="bg-white border border-white rounded-lg  w-[80px] h-[60px] lg:w-[120px] lg:h-[80px] p-5 flex justify-center items-center">
                <img src={r} alt="" className="object-cover w-[100%] lg:w-[80%]" />
              </div>
            </div>
           
          </div>
        </div>

        <div className="mb-12 mx-auto mt-8">
          <h3 className="text-2xl lg:text-4xl text-red-600 font-semibold mb-4 text-center">
            Additional Services
          </h3>
          <table className="border-2 border-slate-600">
              <tr className="">
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">{"Third-Party Manufacturing Supply"}</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">{"Pharmaceutical Company Supply"}</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">{"Cold Chain Supply"} </td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">{"Private Patient Supply"}</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">{"Hospital Supply"} </td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">{"Government supply"}</td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">{'NGOs Supply'}</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">{"Bulk Pharma Exports"}</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">{"Drop Shipping points"}</td>
              </tr>
              
            </table>
            
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
