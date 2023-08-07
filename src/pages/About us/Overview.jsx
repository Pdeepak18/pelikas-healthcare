import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import bgImage from "../../assests/about-us-assets/overview.jpg";
import Footer from "../../components/Footer";

const Overview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="relative top-20 pt-10 overflow-x-hidden">

      
        <h1 className="font-semibold text-blue-800 text-3xl md:text-4xl px-1 md:px-28 mb-8">
              Overview of Pelikas Healthcare
            </h1>
        <div className="ff-saira px-1 md:px-28  flex flex-col-reverse md:flex-row gap-10">
            <table className=" w-[70%] ">
              <tbody>
                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Business Type</td>
                  <td className="text-lg font-medium mt-5">Pharmaceutical Contract Manufacturer & Service Provider</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>

                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Year of Establishment	</td>
                  <td className="text-lg font-medium mt-5">2008</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>


                <tr className="flex flex-row gap-20 ">
                  <td className="font-bold text-xl mt-5 w-[30%]">Company CEO & Promoter	</td>
                  <td className="text-lg font-medium mt-5">Mr. Manoj Aggarwal</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>


                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Industry</td>
                  <td className="text-lg font-medium mt-5">Manufacturing an effective range of Pharmaceutical Medicines</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>


                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Registered Address	</td>
                  <td className="text-lg font-medium mt-5">Plot No :46 First Floor, Industrial Area Phase-2,Chandigarh-160002</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>


                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Legal Status of Firm	</td>
                  <td className="text-lg font-medium mt-5">Private Ltd. Co. Registered under Indian Companies Act 1956</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>


                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Warehousing Facility	</td>
                  <td className="text-lg font-medium mt-5">Yes</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>


                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Original Equipment Manufacturer	</td>
                  <td className="text-lg font-medium mt-5">Yes</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>

                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]">Credir Rated		</td>
                  <td className="text-lg font-medium mt-5">Yes (FITCH)</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>


                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Standard Certifications		</td>
                  <td className="text-lg font-medium mt-5">WHO,GMP,GLP,ECA,& ISO 9001-2015 Certified</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>

               

                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[50%]"> Packaging/Payment & Shipment Details		</td>
                  <td className="text-lg font-medium mt-5"></td>
                </tr>
                <hr className="w-full h-[1px]  mx-auto  rounded  bg-gray-400 mt-5"/>


                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Shipment Mode		</td>
                  <td className="text-lg font-medium mt-5">By Road</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>


       


                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[33%]"> Payment Mode	</td>
                  <td className="text-lg font-medium mt-5"><ul className="list-[circle]">
                    <li>DD</li>
                    <li>Cheque</li>
                    <li>Bank Transfer</li>
                    <li>Online</li>
                  </ul></td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>


                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Infrastructure		</td>
                  <td className="text-lg font-medium mt-5"></td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>


                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Location Type	</td>
                  <td className="text-lg font-medium mt-5">Semi-Urban</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>

                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Building Infrastructure		</td>
                  <td className="text-lg font-medium mt-5">Permanent</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>


                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Space Around		</td>
                  <td className="text-lg font-medium mt-5">Front Porch</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>

                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Company USP		</td>
                  <td className="text-lg font-medium mt-5"></td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>

                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[30%]"> Quality Measures/Testing Facilities			</td>
                  <td className="text-lg font-medium mt-5">Yes</td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5"/>


                <tr className="flex flex-row gap-20">
                  <td className="font-bold text-xl mt-5 w-[33%]"> Primary Competitive Advantage		</td>
                  <td className="text-lg font-medium mt-5"><ul className="list-[circle]">
                    <li>Experienced R & D Department</li>
                    <li>Good Financial Position & TQM</li>
                    <li>Large Production Capacity</li>
                    <li>Large Product Line</li>
                  </ul></td>
                </tr>
                <hr className="w-full h-[1px]   mx-auto  rounded  bg-gray-400 mt-5 mb-5"/>
              </tbody>
            </table>
            <img src={bgImage} alt="" width={400} className="rounded-full px-2 md:px-0 md:w-[30%] h-[200px] animate__animated animate__bounceInDown"  />
        </div>
        <Footer />
      </div>
     
    </div>
  );
};

export default Overview;
