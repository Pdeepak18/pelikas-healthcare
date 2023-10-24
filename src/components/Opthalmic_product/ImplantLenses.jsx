import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Opthimical_data from "../../assests/JsonFile/Opthalmic_Formulation.json"

const ImplantLenses = () => {
    const data = Opthimical_data["IMPLANTS  LENSES"];
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <div className=" overflow-y-auto overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center gap-10 px-[10px] md:px-auto">
        <h1 className="font-semibold text-3xl md:text-4xl text-green-600 underline italic uppercase" >
        OPTHALMIC & ENT PRODUCTS FORMULATIONS
                </h1>
        <p className=" md:max-w-[960px] max-w-700px m-auto  text-justify text-2xl font-bold"> {"IMPLANTS  LENSES"} </p>
      </div>
      <div className="flex flex-col md:flex-row px-[10px]  md:px-[6rem] gap-2 bg-slate h-[100%] mt-5 md:mt-10  !overflow-x-auto">
      <div className="py-4 mx-auto">
        <table className=" w-[100%]  text-lg mt-0 md:mt-8 lg:mx-auto overflow-x-auto">
          <tr className="bg-blue-500 text-white">
            <th className=" border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
              Sr no.
            </th>
            <th className=" border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
            GENERIC_NAME
            </th>
            <th className=" border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
            TYPE
            </th>
            
           
          </tr>
          {data.map((item, index) => {
            return (
              <tr className="hover:bg-blue-500 hover:text-white even:bg-slate-200">
                <td className=" border-2 border-solid border-[#dddddd] text-center lg:p-[8px]">
                  {index + 1}
                </td>
                <td className=" border-2 border-solid border-[#dddddd] text-center md:lg:p-[8px]">
                  
                    {item.GENERIC_NAME}
                
                </td>
                <td className="border-2 border-solid border-[#dddddd] text-center md:lg:p-[8px]  !text-base">
                {item.Type}
                </td>
               
                
              </tr>
            );
          })}
        </table>
      </div>

  
    </div>
    <Footer/>
    </div>
  </>
  )
}

export default ImplantLenses
