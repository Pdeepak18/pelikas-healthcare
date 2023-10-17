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
      <div className=" ff-saira  lg:min-h-[100vh]  flex overflow-x-hidden	 relative  ">
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

            <p className="text-md md:text-lg text-justify md:text-left p-4 md:p-0">
              Pelikas Healthcare Pvt. Ltd., a trailblazing pharmaceutical
              company with over years of manufacturing and marketing expertise.
              From our Mumbai-based head office in Maharashtra, India, we are
              revolutionizing the industry by delivering products that surpass
              international standards of excellence. As proud bearers of ISO and
              GDP compliance, we leave no stone unturned in ensuring the highest
              levels of safety, quality, and efficacy for our valued customers.
              Our state-of-the-art manufacturing units boast prestigious
              certifications such as WHO-GMP and GLP, reflecting our unwavering
              commitment to global best practices. 
              <br></br>              <br></br>

             
              Our extensive range of over 5,000 healthcare
              products includes tablets, capsules, lozenges, sachets,
              suppositories/pessaries, and dry powder injectables (vials/amps),
              liquid injectables (vials/amps), prefilled syringes (PFS),
              infusions, contrast media, repulses, rotacaps, inhalers, nasal
              sprays, cream/ointments/gels, lotions/powder, serum/drops/sprays,
              eye/ear drops, implants / lenses, intraocular solutions,
              ophthalmic consumables & instruments, etc. We are driven by a
              passion to transform lives through innovative healthcare solutions
              that make a tangible difference. Join us on this remarkable
              journey towards a healthier future! Experience excellence in every
              dose – choose Pelikas Healthcare for your healthcare needs.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-about md:h-[600px] ff-saira top-28 relative">
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
              to="/about-pelikas-healthcare/mission-and-value/"
              className="text-[#65BC51] text-xl font-medium text-center md:mt-5 block   group-hover:text-white"
            >
            <div className="mt-8 lg:hidden">Know More</div>
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
              to="/about-pelikas-healthcare/mission-and-value/"
              className="text-[#65BC51] text-xl font-medium text-center mt-5   group-hover:text-white"
            >
                        <div className="mt-8 lg:hidden">Know More</div>

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
              to="/about-pelikas-healthcare/mission-and-value/"
              className="text-[#65BC51] text-xl font-medium text-center mt-5   group-hover:text-white"
            >
                        <div className="mt-8 lg:hidden">Know More</div>

              <button>Know More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative top-[110px] md:top-[80px]">
        <Footer />
      </div>
    </div>
  );
};

export default Aboutpelikas;
