import React from "react";
import Navbar from "../../components/Navbar";
import BgImage from "../../assests/about-us-assets/mission.jpg";

function WhyChooseUs() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="bg-gradient-to-r from-slate-500 to-yellow-100 pt-24">
        <div className="max-w-7xl m-auto h-screen">
          <div className="flex items-center space-x-20 pt-24 pr-20">
            <div>
              <h1 className=" text-blue-900 font-bold text-3xl"> MISSION </h1>
              <p className="text-xl pt-10">
                Our business is built on the strength of our pharmaceuticals.
                Maya Biotech Pvt. Ltd. Takes great care to always provide
                pharmaceuticals of the highest quality that are manufactured
                using only natural ingredients. No additives, contaminants, or
                impurities are used in our products. Our quality assurance team
                is constantly on-site during manufacturing. By utilizing our
                extensive portfolio of high-quality medications, we are setting
                the standard for the pharmaceutical industry.
                <br></br>
                <br></br>
                To continue to fulfil our obligations as healthcare providers by
                providing the highest possible service standards to all members
                of society while upholding our core values of integrity, ethics,
                and unwavering commitment.
                <br></br>
                <br></br>
                Using innovation and global distribution, the pharmaceutical
                company developed a diverse portfolio of pharmaceuticals that
                catapulted them to global prominence.
              </p>
            </div>
            <img
              src={BgImage}
              alt="mission"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
