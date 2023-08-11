import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import Contactus from "./Contactus";

export default function Tablet({ imgURL, desc }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-between items-center px-[2rem] mt-[70px]  mb-10">
        <div className="flex flex-col md:flex-row w-full justify-evenly gap-0 ">
          <img src={location.state.imgURL} width={400} className=" md:w-[40%] mb-5 md:mb-0" />
          <div className=" space-y-10  border-2 border-gray p-4 rounded-2xl ">
            <h1 className=" text-5xl text-blue-700 font-semibold">Tablet</h1>
            <ul className="md:w-[400px] leading-10">
              <li className=" border-b border-slate-400 text-lg p-4 text-slate-500 font-medium">
                {location.state.desc}
              </li>
              <li className=" border-b border-slate-400 text-lg p-4 text-slate-500 font-medium">
                Form: Liquid
              </li>
              <li className=" border-b border-slate-400 text-lg p-4 text-slate-500 font-medium">
                Form: Liquid
              </li>
              <li className=" border-b border-slate-400 text-lg p-4 text-slate-500 font-medium">
                Form: Liquid
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Contactus />
        </div>
      </div>

      <Footer />
    </div>
  );
}
