import React from "react";
import BgImage from "../../assests/about-us-assets/infrastructure.mp4";
import BgImage2 from "../../assests/about-us-assets/infrastructure-2.jpg";
import Navbar from "../../components/Navbar";

function Infrastructure() {
  return (
    <div className="">
      <Navbar />
      <video className="absolute -z-10 " autoPlay loop muted>
        <source src={BgImage} />
      </video>
      <div className="flex w-screen h-screen justify-center items-center max-w-7xl m-auto pt-48">
        <div className="space-y-10">
          <h1 className="text-blue-600 text-7xl font-semibold">
            INFRASTRUCTURE
          </h1>
          <p className="text-2xl  font-bold ">
            We are backed up by a robust infrastructure that stretches across a
            large geographic area.
          </p>
          <div className=" flex flex-col text-center top-0 font-semibold p-12 bg-gray-300 bg-opacity-50 rounded-3xl space-y-10 hover:bg-opacity-75 cursor-pointer">
            <h1 className="text-blue-600 text-4xl">OWN PREMISES</h1>
            <p className="text-xl ">
              Our headquarters are located in Chandigarh and are fully equipped
              with cutting-edge technological systems. Our entire infrastructure
              has been thoughtfully segmented into distinct sections, including
              R&D, manufacturing, quality control, and warehousing and
              packaging. Each team is led by a senior professional who is an
              expert in their field. The entire facility is expansive and
              equipped with all of the necessary safety and purity controls for
              pharmaceutical formulations.
            </p>
          </div>
          <div className=" text-center flex font-semibold  items-center bg-gray-300 bg-opacity-50 rounded-3xl  hover:bg-opacity-75 cursor-pointer">
            <div className=" space-y-10 p-12">
              <h1 className="text-blue-600 text-4xl font-semibold ">
                {" "}
                Research & Development
              </h1>
              <p className="text-xl">
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
            <img src={BgImage2} alt="" className="rounded-3xl max-h-80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;
