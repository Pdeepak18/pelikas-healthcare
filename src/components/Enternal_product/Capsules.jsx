import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EthernalData from "../../assests/JsonFile/Enternal_Formulation.json";

const EnternalCapsules = () => {
  // const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const data = EthernalData.CAPSULES;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const filteredData = data.filter(item =>
  //   item.GENERIC_NAME.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <>
      <div className=" overflow-y-auto overflow-x-hidden">
        <Navbar />
        <div className="flex flex-col justify-center items-center text-center gap-10 px-[10px] md:px-auto">
          <h1 className="font-semibold text-3xl md:text-4xl text-green-600 underline italic uppercase">
            ENTERNAL Formation
          </h1>
          <div>
            <div></div>
            <p className="md:max-w-[960px] max-w-700px m-auto text-justify text-2xl font-bold">
            CAPSULES
          </p>
          </div>
          
        </div>
        
      

        {/* Table */}
        <div className="py-4 mx-auto lg:px-24 overflow-x-auto">
          <table className="w-full !text-base mt-0 md:mt-8 lg:mx-auto ">
            {/* Table Headers */}
            <tr className="bg-blue-500 text-white">
              <th className="border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
                Sr no.
              </th>
              <th className="border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
                GENERIC_NAME
              </th>
              <th className="border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
                PACK_STYLE
              </th>
              <th className="border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
                CATEGORY
              </th>
            </tr>
            {/* Table Rows */}
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-blue-500 hover:text-white even:bg-slate-200"
              >
                <td className="border-2 border-solid border-[#dddddd] text-center lg:p-[4px]">
                  {index + 1}
                </td>
                <td className="border-2 border-solid border-[#dddddd] text-center lg:p-[4px]">
                  {item.GENERIC_NAME}
                </td>
                <td className="border-2 border-solid border-[#dddddd] text-center lg:p-[4px] !text-sm">
                  {item.PACK_STYLE}
                </td>
                <td className="border-2 border-solid border-[#dddddd] text-center lg:p-[4px] !text-sm">
                  {item.CATEGORY}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EnternalCapsules;
