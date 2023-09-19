import React, { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGreaterThan } from "react-icons/fa";
import "../App.css";

import { hasFlag } from "country-flag-icons";
import AddressDetails from "../components/AddressDetails";

const InternationalPresence = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const states = [
    {
      name: "Africa",
      image: require("../assests/africa.jpg"),
      code: ["bi", "dj", "et", "ml", "mr", "mu", "tz", "so", "sl", "sc", "sl"],
    },
    {
      name: "Asia",
      image: require("../assests/asia.jpg"),
      code: [      "am", "bh", "ge", "kw", "kg", "my", "mv", "np", "om", "ph", "qa", "tw", "th", "tm", "ae", "ye",
    ],
    },
    {
      name: "Europe",
      image: require("../assests/Europe.jpg"),
      code: ["bz", "do", "ht", "hn",
      "ec", "gt", "mx", "py", "ve",    ],
    },
    {
      name: "America",
      image: require("../assests/america.jpg"),
      code: ["bi", "dj", "et", "ml", "mr", "mu", "tz", "so", "sl", "sc", "sl"],
    },
    {
      name: "Ocenia",
      image: require("../assests/ocenia.jpg"),
      code: [ "au", "fj", "nz", "pg", "ws",],
    },
    {
      name: "Caribbean",
      image: require("../assests/caribbean.jpg"),
      code: [  "kn", "lc", "tt",],
    },
  ];
  const [selectedRegion, setSelectedRegion] = useState(states[0].name);

  const handleRegionClick = (regionName) => {
    setSelectedRegion(regionName);
  };
  const selectedStates = states.find((state) => state.name === selectedRegion);

  return (
    <>
      <Navbar />
      <div className=" min-h-[100vh]  flex flex-col lg:flex-row overflow-x-hidden	mx-2 relative lg:top-20 py-5 px-4 lg:px-10 gap-4">
        <div className="bg-[#F7F7F7] p-3 px-6 lg:max-h-[72vh] lg:max-w-[30vw]">
          <h3 className="text-2xl text-red-600 font-semibold">
            Worldwide <span className="text-3xl">1500+</span> Satisfied
            Customers
          </h3>
          <div className="mt-4 px-6 text-xl">
            <ul>
              {states?.map((state, index) => {
                return (
                  <>
                    <li
                      className="hover:bg-[#3F5788] hover:text-white p-3 rounded-lg cursor-pointer"
                      onClick={() => handleRegionClick(state.name)}
                    >
                      <div className="flex flex-row justify-between items-baseline">
                        <p>{state.name}</p>
                        <FaGreaterThan />
                      </div>
                    </li>
                    <hr className="mt-2  border-1 " />
                  </>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:w-[68vw]">
          {selectedRegion && (
            <img
              src={states.find((state) => state.name === selectedRegion)?.image}
              alt={`${selectedRegion} Map`}
              className="lg:max-w-[60vw] lg:max-h-[55vh] border-1 border-gray-300 rounded-lg outline"
            />
          )}
          <div className="mt-4">
         
          <h3 className="text-xl font-semibold">Country Flags:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedStates?.code.map((countryCode, index) => (
                    <img
                      key={index}
                      alt={`${countryCode} Flag`}
                      src={`https://flagcdn.com/w80/${countryCode}.png`}
                      className="w-[80px] h-[60px]"
                    />
                  ))}
                </div>
          </div>
        </div>
      </div>
      <AddressDetails />
      <Footer />
    </>
  );
};

export default InternationalPresence;
