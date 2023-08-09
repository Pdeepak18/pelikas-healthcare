import React from 'react'
// import React from "react";
import { ProductItems } from "./ProductItems";
// import Productdropdown from './Productdropdown'
// import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import Navbar from "../Navbar";
// import Footer from '../Footer'
import { useNavigate } from 'react-router-dom';
import Contactus from './Contactus';

export default function TopicFormulation() {
    const data = ProductItems[3];
    const navigate = useNavigate();
    // {console.log(typeof data)}
    return (
      <div className="overflow-hidden">
        <Navbar />
        <div className="flex flex-col justify-center items-center text-center space-y-10">
          <h1 className="font-semibold text-4xl text-slate-500 ">OUR PRODUCT</h1>
          <h1 className="font-semibold text-4xl text-green-600 underline italic">
          Topical FORMULATIONS
          </h1>
          <p className=" md:max-w-[960px] max-w-700px m-auto text-base">
            Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras
            porttitor condimentum orci suscipit. Leo maecenas in tristique,
            himenaeos elementum placerat. Taciti rutrum nostra, eget cursus velit
            ultricies. Quam molestie tellus himenaeos cubilia congue vivamus
            ultricies. Interdum praesent ut penatibus fames eros ad consectetur
            sed.
          </p>
        </div>
        <div className="flex justify-center items-start  w-screen mt-10 md:space-x-10">
          <table className=" w-[700px]">
            <tr className="">
              <th className=" border-2 border-solid border-[#dddddd] text-center p-[8px]">
                Sr no.
              </th>
              <th className=" border-2 border-solid border-[#dddddd] text-center p-[8px]">
                {data.TITLE}
              </th>
            </tr>
            {data.SUBMENU.map((item, index) => {
              return (
                <tr className="hover:bg-blue-500 hover:text-white even:bg-slate-200">
                  <td className=" border-2 border-solid border-[#dddddd] text-center p-[8px]">
                    {index + 1}
                  </td>
                  <td className=" border-2 border-solid border-[#dddddd] text-center p-[8px]">
                  <button onClick={()=>{navigate("/products/tablet",{state:{desc:item.description,imgURL:item.imgURL}})}}>
                          {item.TITLE}
                        </button>
                    </td>
                </tr>
              );
            })}
          </table>
          <Contactus/>
        </div>
        {/* <Footer/> */}
      </div>
    );
}
