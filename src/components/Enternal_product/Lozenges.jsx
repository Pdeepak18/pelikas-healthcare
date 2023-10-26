import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EthernalData from "../../assests/JsonFile/Enternal_Formulation.json";

const Lozenges = () => {
  const data = EthernalData.LOZENGES;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" overflow-y-auto overflow-x-hidden">
        <Navbar />
        <div className="flex flex-col justify-center items-center text-center gap-10 px-[10px] md:px-auto">
          <h1 className="font-semibold text-3xl md:text-4xl text-green-600 underline italic uppercase">
            ENTERNAL Formation
          </h1>
          <p className=" md:max-w-[960px] max-w-700px m-auto  text-justify text-2xl font-bold">
          LOZENGES{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-row px-[10px]  md:px-[6rem] gap-2 bg-slate h-[100%] mt-5 md:mt-10  !overflow-x-auto">
          <div className="py-4 mx-auto">
            <table className=" w-[100%]  text-lg mt-0 md:mt-8 lg:mx-auto overflow-x-auto ">
              <tr className="bg-blue-500 text-white">
                <th className=" border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
                  Sr no.
                </th>
                <th className=" border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
                  PRODUCTS
                </th>
                <th className=" border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
                  FLAVOURS
                </th>
                <th className=" border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
                  PACK_STYLE
                </th>
                <th className=" border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
                  PACKING
                </th>
              </tr>
              {data.map((item, index) => {
                return (
                  <tr className=" even:bg-slate-200">
                    <td className=" border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
                      {index + 1}
                    </td>
                    <td className=" border-2 border-solid border-[#dddddd] text-center md:lg:p-[8px]">
                      {item.PRODUCT}
                    </td>
                    {index === 0 && (
                      <td
                        rowSpan="8"
                        colSpan={1}
                        className="border-2 border-solid border-[#dddddd] text-center lg:p-[4px] !text-sm"
                      >
                        {item.FLAVOURS}
                      </td>
                    )}
                    {index === 8 && <td className="border-2 border-solid border-[#dddddd] text-center lg:p-[4px] !text-sm">{item.FLAVOURS}</td>}
                   
                    {index === 0 && (
                      <td
                        rowSpan="8"
                        colSpan={1}
                        className="border-2 border-solid border-[#dddddd] text-center lg:p-[4px] !text-sm"
                      >
                       {item.PACK_STYLE}
                      </td>
                    )}
                    {index === 8 && <td className="border-2 border-solid border-[#dddddd] text-center lg:p-[4px] !text-sm">{item.PACK_STYLE}</td>}

                    
                    {index === 0 && (
                      <td
                        rowSpan="8"
                        colSpan={1}
                        className="border-2 border-solid border-[#dddddd] text-center lg:p-[4px] !text-sm"
                      >
                        {item.PACKING}
                      </td>
                    )}
                    {index === 8 && <td className="border-2 border-solid border-[#dddddd] text-center lg:p-[4px] !text-sm">{item.PACKING}</td>}

                   
                   
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Lozenges;
