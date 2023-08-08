import React, { useState } from "react";
import { ProductItems } from "./ProductItems";
import { Link } from "react-router-dom";
import product from "./product";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Productdropdown(title,submenu,path) {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <Navbar/>
      <div className=" flex flex-col justify-center items-center pt-32 pb-32 bg-slate-100">
      <h1 className="font-semibold text-5xl text-green-500">Complete Product Portfolio</h1>
      {ProductItems.map((ProductItem, index) => {
        if (ProductItem.SUBMENU != undefined) {
          return (
            <table className="w-[700px]">
            <div className=" h-16 bg-white bg-slate-100">

            </div>
              <tr className=" bg-blue-600 text-white">
                <th className=" border-2 border-solid border-[#dddddd] text-center p-[8px]">SR no.</th>
                <th className=" border-2 border-solid border-[#dddddd] text-center p-[8px]">{ProductItem.TITLE}</th>
              </tr>
              {ProductItem.SUBMENU.map((item,index)=>{
                return(
                  <tr className="hover:bg-blue-500 hover:text-white even:bg-slate-200">
                    <td className=" border-2 border-solid border-[#dddddd] text-center p-[8px]">{index+1}</td>
                    <td className=" border-2 border-solid border-[#dddddd] text-center p-[8px]">
                  <a href="/product/tablet">{item.TITLE}</a>
                </td>
                  </tr>
                )
              })}
            </table>
          );
        } else {
          return <ul>{ProductItem.TITLE}</ul>;
        }
      })}
    </div>
    <Footer/>
    </div>
  );
}
