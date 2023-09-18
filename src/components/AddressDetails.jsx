import React from "react";
import { FaRegAddressCard } from "react-icons/fa";

const AddressDetails = () => {
  return (
    <div className="relative bg-[#f3f3f3] ">
      <div className="px-10 extra-margin flex flex-col  md:flex-row justify-center  md:gap-[150px]">
        <div className=" p-3">
          <FaRegAddressCard size="100px" className="flex justify-center" />
          <h4 className="text-black font-semibold">Thane Branch:</h4>
          <p className="benefits-detail">
            Gupta House No. 4702, Jadhav Pada, Dhaniv Baug,
            <br />
            Pelhar, Vasai Road (East), Vasai, Thane – 401 202 Maharashtra, INDIA
            <br />
            Contact No.: +91 80808 28871
            <br />
            Email: pelikashealthcare@gmail.com{" "}
          </p>
        </div>

        <div className=" p-3">
          <FaRegAddressCard size="100px" className="flex justify-center" />
          <h4 className="text-black font-semibold">Thane Branch:</h4>
          <p className="benefits-detail">
            Shop No. 2, C-Wing, Shri Badrinath CHSL,
            <br />
            Ketkipada, Dahisar (East), Mumbai - 400 068,Maharashtra, INDIA
            <br />
            Contact No.: +91 84549 68736
            <br />
            Email: pelikashealthcare@gmail.com{" "}
          </p>
        </div>

        <div className=" p-3">
          <FaRegAddressCard size="100px" className="flex justify-center" />
          <h4 className="text-black font-semibold">Thane Branch:</h4>
          <p className="benefits-detail">
            Gupta House No. 4702, Jadhav Pada, Dhaniv Baug,
            <br />
            Pelhar, Vasai Road (East), Vasai, Thane – 401 202 Maharashtra, INDIA
            <br />
            Contact No.: +91 80808 28871
            <br />
            Email: pelikashealthcare@gmail.com{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
