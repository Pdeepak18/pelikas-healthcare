import React, { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import map from "../assests/services/Map Background.jpg";
import services from "../assests/services/38(best-international).webp";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const additionalServices = [
    "Third-Party Manufacturing Supply",
    "Pharmaceutical Company Supply",
    "Cold Chain Supply",
    "Private Patient Supply",
    "Hospital Supply",
    "Government supply",
    "NGOs Supply",
    "Bulk Pharma Exports",
    "Drop Shipping points"
  ];

  return (
    <>
      <Navbar />
      <div className="relative min-h-[100vh]   p-6 py-20 bg-[#EEF6FF] flex flex-col mx-auto">
      <div className="mb-12">
          <h3 className="text-2xl text-red-600 font-semibold mb-4">Additional Services</h3>
          <ul className="list-disc list-inside text-lg text-gray-800">
            {additionalServices.map((service, index) => (
              <li key={index} className="mb-2">{service}</li>
            ))}
          </ul>
        </div>
      <div className="flex flex-col mx-auto">
      <h3 className="text-center text-red-600 text-2xl mb-6 font-semibold">
          Top 10 International Courier Services
        </h3>
        <div className="flex flex-col lg:flex-row bg-[#EEF6FF]">
          <img src={map} alt="" className=" lg:w-[45vw]" />
          <img src={services} alt="" className=" lg:w-[50vw]" />
        </div>
      </div>
       {/* details
        */}
        <div className="flex flex-row gap-10 flex-wrap mt-6 mx-auto">
        <div >
          <p className="text-lg font-semibold underline">INTERNATIONAL AIR CARGO</p>
          <div className="mt-4">
            <table className="border-2 border-slate-600">
              <tr className="">
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">Emirates</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">United Cargo (UA)</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">Singalpore Airlines (SQ)</td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">Air Arabia (G9)</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">Turkish (TK)</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">Fly Dubai Cargo (FZ)</td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">Ethiopian Airlines</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">Etihad Cargo(EY)</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">COPA (CM)</td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">Qater Airways (QR)</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">Lufthansa Cargo (LH)</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600"> American Airlines (AA)</td>
              </tr>
            </table>
          </div>
        </div>

        <div >
          <p className="text-lg font-semibold underline">INTERNATIONAL SEA CARGO AND COURIER </p>
          <div className="mt-4">
            <table className="border-2 border-slate-600">
              <tr className="">
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">MAERSK</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">Hapag Llyod</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">ZIM Integrated Shipping </td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">COSCO Shipping</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">Orient Overseas </td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">Matson Inc</td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">FedEx</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">UPS</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">DHL</td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">EMS</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600">ARAMEX</td>
                <td className="p-2 md:p-4 text-base md:text-lg border border-slate-600"> TCI </td>
              </tr>
            </table>
          </div>
        </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
