import React,{useEffect} from "react";
import { ProductItems } from "./ProductItems";
import Navbar from "../Navbar";
import Footer from '../Footer'
import Tablet from "./Tablet";
import Contactus from "./Contactus";
import { useNavigate } from "react-router-dom";
import styles from "./product.module.css";


export default function EnteralFormulations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = ProductItems[0];
  const navigate = useNavigate();
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center gap-10 mt-20 px-[10px] md:px-auto">
        <h1 className="font-semibold text-3xl md:text-4xl text-green-600 underline italic">
          Critical Care General Dry Injection
        </h1>
        <p className=" md:max-w-[960px] max-w-700px m-auto text-base text-justify">
          Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras
          porttitor condimentum orci suscipit. Leo maecenas in tristique,
          himenaeos elementum placerat. Taciti rutrum nostra, eget cursus velit
          ultricies. Quam molestie tellus himenaeos cubilia congue vivamus
          ultricies. Interdum praesent ut penatibus fames eros ad consectetur
          sed.
        </p>
      </div>
      <div className="flex flex-col md:flex-row px-[10px]  md:px-[6rem] gap-2 bg-slate h-[100%] mt-5 md:mt-10 ">
        <div>
          <table className=" w-[100%] md:w-[600px] text-lg mt-0 md:mt-16">
            <tr className="bg-blue-500 text-white">
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
                  <td className=" border-2 border-solid border-[#dddddd] text-center md:p-[8px]">
                    <button
                     className="block w-full text-center border-hidden	 sm:border-0	md:border-2 text-base "
                      onClick={() => {
                        navigate("/products/tablet", {
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
          </table>
        </div>

        <section className={`${styles["cart-info"]} `}>
          <div className={`${styles["cart-info-inner"]}  `}>
            <h1 className="font-semibold text-4xl ">Contact Us</h1>
            <Contactus className="" />
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}
