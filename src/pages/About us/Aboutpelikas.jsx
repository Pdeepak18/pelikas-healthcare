import React, { useEffect } from "react";
import BGimage from "../../assests/about-us-assets/ss-removebg-preview.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../App.css";
import "animate.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Aboutpelikas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const myStyle = {
    fontFamily: "Saira",
  };
  return (
    <div className="w-full h-full ">
      <Navbar />
      <div className="ff-saira  lg:h-[100vh]  flex overflow-x-hidden	 relative top-20 ">
        <div className=" md:max-w-6xl  mx-auto  justify-center  items-center md:space-x-16  flex flex-col md:flex-row">
          <img
            src={BGimage}
            alt="img"
            width={500}
            className="rounded-full animate__animated animate__backInLeft "
          />

          <div className=" text-center animate__animated animate__backInRight">
            <h1 className=" text-green-400 text-xl font-semibold p-6">
              WELCOME TO PELIKAS HEALTHCARE SOLUTION LTD.
            </h1>

            <h1 className=" text-blue-900 text-4xl font-bold pb-6">
              Focus on Purity and Quality
            </h1>

            <p className="text-md md:text-xl text-justify md:text-left p-4 md:p-0">
              Our vision is to grow into a contract manufacturing pharmaceutical
              company based on advanced technology and research, and to
              establish ourselves as an intellectually strong player in both the
              domestic and international markets. Pelikas Healthcare has grown
              tremendously from a small domestic company to an integrated,
              research-based, contract manufacturing pharmaceutical company with
              a strong focus on contract manufacturing.
              <br></br>
              <br></br>
              We have travelled this far as a team of Pelikas Healthcare because
              of our management’s unwavering “dedication” and “will” to win. Our
              company is dedicated to providing the highest-quality
              pharmaceutical products at the most affordable prices to the
              community in order to contribute to the reduction of healthcare
              costs. We are confident that our efforts will result in the
              Company’s continued growth as a contract manufacturer in the years
              ahead. While we continue to grow our business.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-about md:h-[600px] ff-saira top-20 relative">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 z-10 justify-center items-center  h-full">
          <div className="border-2 border-gray-800 flex flex-col md:w-[30%] m-2 md:m-0 p-8 md:p-20 z-50 hover:bg-[#65BC51] hover:text-white group hover:cursor-pointer">
            <h2 className="text-[#65BC51] text-2xl text-center  group-hover:text-white font-semibold">
              Mission
            </h2>
            <p className="text-white text-justify mt-5 text-lg">
              Pelikas healthcare Takes great care to always provide
              pharmaceuticals of the highest quality that are manufactured using
              only natural ingredients.
            </p>

            <Link
              to="/contact-us"
              className="text-[#65BC51] text-xl font-medium text-center md:mt-5 block   group-hover:text-white"
            >
              <button>Know More</button>
            </Link>
          </div>

          <div className="border-2 border-gray-800 flex flex-col md:w-[30%]  m-2 md:m-0  p-8 md:p-20 z-50 hover:bg-[#65BC51] hover:text-white group">
            <h2 className="text-[#65BC51] text-2xl text-center  group-hover:text-white font-semibold">
              Vision
            </h2>
            <p className="text-white text-justify mt-5 text-lg">
              Our vision is to be a leading pharma company in India and to
              become a significant global player by providing high quality,
              affordable solutions.
            </p>

            <Link
              to="/contact-us"
              className="text-[#65BC51] text-xl font-medium text-center mt-5   group-hover:text-white"
            >
              <button>Know More</button>
            </Link>
          </div>

          <div className="border-2 border-gray-800 flex flex-col md:w-[30%]  m-2 md:m-0  p-8 md:p-20 z-50 hover:bg-[#65BC51] hover:text-white group">
            <h2 className="text-[#65BC51] text-2xl text-center  group-hover:text-white font-semibold">
              Our Values
            </h2>
            <p className="text-white text-justify mt-5 text-lg">
              Our company is committed to provide best pharma products at
              affordable prices to the community with a view to help bring down
              the healthcare costs.
            </p>

            <Link
              to="/contact-us"
              className="text-[#65BC51] text-xl font-medium text-center mt-5   group-hover:text-white"
            >
              <button>Know More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative top-[80px] md:top-[80px]">
        <Footer />
      </div>
    </div>
  );
};

export default Aboutpelikas;
