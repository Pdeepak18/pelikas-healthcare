import React, { useState,useEffect } from "react";
import { ProductItems } from "./ProductItems";
import { Link, useNavigate } from "react-router-dom";
import product from "./product";
import Navbar from "../Navbar";
import Tablet from "./Tablet";
import Footer from "../Footer";
import Contactus from "./Contactus";
import styles from "./product.module.css";

export default function Productdropdown(title, submenu, path) {
  // const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="">
      <Navbar />
      <h1 className="font-semibold text-4xl md:text-5xl text-green-500 text-center mt-20">
        Complete Product Portfolio
      </h1>
      <div className=" flex flex-col md:flex-row px-[10px]  md:px-[6rem] gap-2 bg-slate h-[100%] mt-5 md:mt-10 ">
        <div>
          {ProductItems.map((ProductItem, index) => {
            if (ProductItem.SUBMENU != undefined) {
              return (
                <table className="w-[100%] md:w-[600px] text-lg">
                  <tr className=" bg-blue-600 text-white">
                    <th className=" border-2 border-solid border-[#dddddd] text-center p-[8px]">
                      SR no.
                    </th>
                    <th className=" border-2 border-solid border-[#dddddd] text-center p-[4px] md:p-[8px]">
                      {ProductItem.TITLE}
                    </th>
                  </tr>
                  {ProductItem.SUBMENU.map((item, index) => {
                    return (
                      <tr className="hover:bg-blue-500 hover:text-white even:bg-slate-200">
                        <td className=" border-2 border-solid border-[#dddddd] text-center p-[8px]">
                          {index + 1}
                        </td>
                        <td className=" border-2 border-solid border-[#dddddd] text-center md:p-[8px] ">
                          <button
                            className="block w-full text-center border-hidden	 sm:border-0	md:border-2 text-base "
                            onClick={() => {
                              navigate(`${item.PATH}`, {
                                state: {
                                  desc: item.description,
                                  imgURL: item.imgURL,
                                },
                              });
                            }}
                          >
                            {item.TITLE}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  <br />
                </table>
              );
            } else {
              return <ul>{ProductItem.TITLE}</ul>;
            }
          })}
        </div>

        <section className={`${styles["cart-info"]} `}>
          <div className={`${styles["cart-info-inner"]}  `}>
            <h1 className="font-semibold text-4xl ">Contact Us</h1>
            <Contactus className="" />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
