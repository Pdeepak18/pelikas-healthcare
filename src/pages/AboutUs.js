import React from "react";
// import bgImage from "../assests/about-us-assets/work-with-us.mp4";
import first from "../assests/about-us-assets/first.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import WorkWithUs from './Work_With_Us'
// import Careers from "./Careers";
// import Aboutussection from "../components/Aboutussection";

export default function AboutUs() {
  return (
    <div className="overflow-hidden">
      <div className="font bg-slate-200 pb-16">
        <div className="flex justify-end items-center w-screen h-52 flex-col">
          <h1 className=" f font-bold text-5xl">About Us</h1>
          <div className="h-1 w-40 bg-green-500 mt-3"></div>
        </div>
        <p className="font text-xl flex w-screen justify-center items-center mt-10 text-center">
          The Royal Melbourne Hospital (RMH) began in 1848 as Victoria’s first
          public hospital
          <br></br>
          and today is one of the largest healthcare providers in Australia.
        </p>
        <div className=" w-screen flex justify-center pt-16">
          <img src={first} alt="gg" height={800} width={800} className=" " />
        </div>
      </div>

      <div className="flex m-auto max-w-5xl mb-20 mt-20">
        <h1 className=" text-blue-900 font-bold flex items-center text-start mr-8">
          Victoria’s first public hospital, with only 10 beds to our name.
        </h1>
        <div className="">
          <p className=" text-xl text-slate-600">
            The RMH began in 1848 as Victoria’s first public hospital with only
            10 beds to our name. And while we were small in size, we had the
            community of Melbourne behind us and we were ready to provide the
            best possible care for those in need.
          </p>
          <p className=" text-xl text-slate-600 mt-6">
            Since those early years, we’ve moved forward with purpose. Always at
            the forefront, leading the way on improving the quality of life for
            all.
          </p>
          <Link
            to="/"
            className=" flex text-blue-500 text-lg mt-6 hover:text-violet-600"
          >
            Read More
            <AiOutlineArrowRight className="text-base mt-2" />
          </Link>
        </div>
      </div>

      
      <div className=" grid-cols-3 flex space-x-5 max-w-7xl m-auto">
        <div className=" border-2 border-black flex flex-col bg-slate-400 items-center justify-center h-80 space-y-10 text-center rounded-lg mb-24 hover:bg-orange-300 transition-all duration-300">
          <h1 className="text-2xl font-bold text-white">Mission</h1>
          <p className="text-lg text-white p-4">Maya Biotech Takes great care to always provide pharmaceuticals of the highest quality that are manufactured using only natural ingredients.</p>
        </div>
        <div className=" border-2 border-black flex flex-col bg-slate-400 items-center justify-center h-80 space-y-10 text-center rounded-lg mb-24 hover:bg-orange-300 transition-all duration-300">
          <h1 className="text-2xl font-bold text-white">Mission</h1>
          <p className="text-lg text-white p-4">Maya Biotech Takes great care to always provide pharmaceuticals of the highest quality that are manufactured using only natural ingredients.</p>
        </div>
        <div className=" border-2 border-black flex flex-col bg-slate-400 items-center justify-center h-80 space-y-10 text-center rounded-lg mb-24 hover:bg-orange-300 transition-all duration-300">
          <h1 className="text-2xl font-bold text-white">Mission</h1>
          <p className="text-lg text-white p-4">Maya Biotech Takes great care to always provide pharmaceuticals of the highest quality that are manufactured using only natural ingredients.</p>
        </div>

      </div>
      <WorkWithUs/>
      {/* <Aboutussection /> */}
    </div>
  );
}
