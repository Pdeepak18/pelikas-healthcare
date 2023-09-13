import React, { useEffect } from "react";
import BgImage from "../../assests/about-us-assets/infrastructure.mp4";
import BgImage2 from "../../assests/about-us-assets/infrastructure-2.jpg";
import BgImage3 from "../../assests/about-us-assets/maya-biotech-plant.webp";
import img from "../../assests/about-us-assets/about-us-hd.jpg";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Footer from "../../components/Footer";
import 'animate.css';
const Infrastructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div classname="  ">
      <Navbar />
      <div
        className="md:rounded-xl relative lg:top-[72px] h-[200px] md:h-[250px]"
        id="/"
      >
        <div className="relative h-full w-full">
          <img
            src={img}
            alt="image 1"
            className="h-full w-full opacity-100  md:object-cover "
          />
          <div className="absolute inset-0 grid h-full w-full p-10 md:p-20">
            <div className="w-4/4  md:w-2/4 opacity-95">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl md:text-3xl lg:text-5xl"
              >
                Infrastructure
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 smll-font"
              >
                <p className="italic">
                  <a href="/" className="hover:text-light-blue-900">
                    <Link to="/">Home</Link>
                  </a>{" "}
                  /
                  <a href="/" className="hover:text-light-blue-900">
                    {" "}
                    <Link to="/aboutus">Infrastructure</Link>
                  </a>
                </p>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-full relative top-10  p-5 md:p-16  mx-auto ">
        <h1 className=" text-3xl md:text-4xl text-bolder text-[#044EA1]">
          Infrastructure
        </h1>
        <p className="mt-3 md:mt-5 ff-saira text-md md:text-lg">
          We are backed up by a robust infrastructure that stretches across a
          large geographic area and is further subdivided into the following
          units:
        </p>
        <div className="flex flex-col gap-6">
          <p className="mt-10 md:mt-12 text-green-800 font-semibold	 text-lg">
            Warehouse and packaging for research and development
          </p>
          <p className="text-lg ff-saira ">Manufacturing</p>
          <p className="text-lg ff-saira ">Control of Quality</p>
          <p className="text-lg ff-saira ">
            These parameters enable us to efficiently and concurrently manage
            multiple business processes. Additionally, we have an in-house
            Quality Control Department equipped with a sophisticated array of
            machines that assists in ensuring quality and giving shape to our
            professionals’ ground-breaking ideas.
          </p>
        </div>
        <div className="mt-10 mx-auto md:w-[1200px] h-[500px] bg-[#EEEEEE] rounded-xl bg-vid relative">
          <video
            className="w-[1200px] h-[500px] object-cover -z-10 rounded-xl"
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source src={BgImage} />
          </video>
          <div className="absolute top-0 md:top-12 left-[0%] z-100 p-5 md:p-20   ">
            <div className="w-[100%] h-full flex justify-center items-center  flex-col">
              <p className="text-3xl font-semibold text-[#044EA1] text-center ff-saira">
                Own Premises
              </p>
              <p className="mt-2 ff-saira lg:text-justify">
                Our headquarters are located in Chandigarh and are fully
                equipped with cutting-edge technological systems. Our entire
                infrastructure has been thoughtfully segmented into distinct
                sections, including R&D, manufacturing, quality control, and
                warehousing and packaging. Each team is led by a senior
                professional who is an expert in their field. The entire
                facility is expansive and equipped with all of the necessary
                safety and purity controls for pharmaceutical formulations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 mx-auto md:w-[1200px] lg:h-[400px] bg-[#EEEEEE] rounded-xl bg-vid relative ">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[50%] p-2 lg:p-12">
              <h1 className="text-[#044EA1] text-3xl text-center ">
                Research & Development
              </h1>
              <p className="mt-3 ff-saira text-justify lg:text-lg">
                Our Chandigarh headquarters are fully equipped with cutting-edge
                technological systems. Our entire infrastructure has been
                carefully segmented into distinct areas, including research and
                development, manufacturing, quality control, and warehousing and
                packaging. Each team is led by a senior professional who is an
                authority in their respective fields. The entire facility is
                large and equipped with all of the necessary safety and purity
                controls for pharmaceutical formulations.
              </p>
            </div>

            <img src={BgImage3} alt="" className="object-fill lg:w-[50%]" />
          </div>
        </div>
      </div>
      <div className="relative top-16">
        <Footer />
      </div>
    </div>
  );
};

export default Infrastructure;
