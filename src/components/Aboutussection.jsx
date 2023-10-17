import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const Aboutussection = () => {
  const myStyle = {
    color: "black",
    fontFamily: "Segoe UI",
  };
  const aboutUsNo = [
    {
      title: "State Of The Art Facilities",
      no: <CountUp end={15} duration={6.75} />,
      extra: "",
    },
    {
      title: "Tablets Per Day Manufacturing Capacity",
      no: <CountUp end={140} duration={6.75} />,
      extra: "M",
    },
    {
      title: "Patents Applied",
      no: <CountUp end={85} duration={6.75} />,
      extra: "+",
    },
    {
      title: "FSSAI Approvals",
      no: <CountUp end={690} duration={6.75} />,
      extra: "+",
    },
    {
      title: "DCGI Approvals",
      no: <CountUp end={919} duration={6.75} />,
      extra: "+",
    },
    {
      title: "Clients Served With Excellence",
      no: <CountUp end={1000} duration={6.75} />,
      extra: "",
    },
    {
      title: "Commercialized Formulations",
      no: <CountUp end={4000} duration={6.75} />,
      extra: "+",
    },
    {
      title: "Brands",
      no: <CountUp end={18000} duration={6.75} />,
      extra: "+",
    },
  ];
  return (
    <div
      style={myStyle}
      className="bg-[#9EA791] p-6 relative -top-[140px] md:top-0 text-black"
    >
      <h1 className="text-3xl font-semibold text-center ">About Us</h1>
      <p className="text-[20px] md:text-2xl text-center mt-10">
        Plikas Healthcare is the largest contract manufacturing <br />
        pharmaceutical company of India
      </p>
      <div className=" flex flex-row flex-wrap  gap-20 justify-center mt-14 px-auto md:px-20 ">
        {aboutUsNo.map((i) => {
          return (
            <div className="flex flex-col">
              <h2 className="font-bold text-center text-xl md:text-2xl">
                {i.no}
                {i.extra}
              </h2>
              <p className=" md:text-[20px] text-center">{i.title}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-14  flex items-center justify-center">
        <Link to="/international-presence">
          <button className="bg-blue-400 w-full mt-6 md:w-fit flex items-center justify-center md:justify-start text-white py-[8px] px-[7px] rounded-md font-inherit font-bold hover:bg-red-400 transition-all duration-200">
            <a href="/international-presence" className="text-base">
              Know More
            </a>
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="w-[14px] h-[14px] ml-2 my-1"
            >
              <path
                fill="currentColor"
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Aboutussection;
