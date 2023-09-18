import React, { useEffect } from "react";
import BgImage from "../../assests/about-us-assets/mission.jpg";
import mission from "../../assests/about-us-assets/mission1.webp";
import vision from "../../assests/about-us-assets/visionn2.webp";
import values from "../../assests/about-us-assets/our-value3.webp";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "animate.css";

const Missionandvalue = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-full ">
      <Navbar />
      <div className="relative lg:top-[72px] lg:h-[100vh]   ">
        <div className=" ">
          {/* mission */}
          <div
            id="mission"
            className="flex  flex-col-reverse md:flex-row md:justify-center md:items-center gap-5 py-10 md:py-20 md:px-10 "
          >
            <div className="flex flex-col md:w-[60%] animate__animated animate__backInLeft">
              <h1 className=" text-blue-900 font-bold text-2xl md:text-3xl ff-saira text-left md:text-center px-2 md:px-0">
                {" "}
                MISSION{" "}
              </h1>
              <p className="text-md md:text-lg pt-5 md:pt-10 ff-saira px-2 md:px-5 leading-6">
                Introducing our revolutionary business concept: a comprehensive
                online platform that simplifies the procurement of
                pharmaceuticals and healthcare supplies for individuals and
                businesses alike. Our mission is to offer a one-stop shop,
                ensuring convenience, reliability, and exceptional customer
                service. At our core, we prioritize the delivery of superior
                quality products at competitive rates. Our team of skilled
                people meticulously curates a range of pharmaceuticals and
                healthcare supplies to meet your specific needs. With our
                extensive selection, you can trust that all your medical
                requirements will be fulfilled with utmost precision. In
                addition to offering top-notch products, we are dedicated to
                providing an unparalleled level of customer service. Our
                knowledgeable and responsive team is readily available to
                address any inquiries or concerns you may have throughout the
                purchasing process. Experience the convenience and peace of mind
                that comes with accessing high-quality medical equipment and
                supplies from a trusted source. Join us as we revolutionize the
                industry, delivering excellence in every transaction.
              </p>
            </div>
            <img
              src={mission}
              alt="mission"
              className="px-2 md:px-0 md:rounded-[100%] object-cover w-[450px] animate__animated animate__heartBeat"
            />
          </div>

          {/* vision */}
          <div className="flex  flex-col-reverse md:flex-row-reverse md:justify-center md:items-center gap-5 py-10 md:py-20  md:px-10">
            <div className="flex flex-col md:w-[60%] animate__animated animate__backInRight">
              <h1 className=" text-blue-900 font-bold text-2xl md:text-3xl ff-saira text-left md:text-center px-2 md:px-0">
                {" "}
                Vision{" "}
              </h1>
              <p className="text-md md:text-lg pt-5 md:pt-10 ff-saira px-2 md:px-5 leading-6">
                Our vision is to be a leading pharmaceutical company in India
                and to become a significant global player by providing high
                quality, affordable and innovative solutions in medicine and
                treatment."
                <br />
                <br />
                We believe that complete customer satisfaction is the key to
                expand business. Our actions are driven by these core values:{" "}
                <br /> Service <br /> Integrity <br /> Quality <br /> Customer
                Satisfaction
              </p>
            </div>
            <img
              src={vision}
              alt="mission"
              className="px-2 md:px-0 md:rounded-[100%] object-cover w-[450px] animate__animated animate__heartBeat"
            />
          </div>

          {/* values */}
          <div className="flex  flex-col-reverse md:flex-row md:justify-center md:items-center gap-5 py-10 md:py-20 md:px-10">
            <div className="flex flex-col md:w-[60%] animate__animated animate__backInLeft">
              <h1 className=" text-blue-900 font-bold text-2xl md:text-3xl ff-saira text-left md:text-center px-2 md:px-0">
                {" "}
                Our Values{" "}
              </h1>
              <p className="text-md md:text-lg pt-5 md:pt-10 ff-saira px-2 md:px-5 leading-6">
                Our company is committed to provide best pharma products at
                affordable prices to the community with a view to help bring
                down the healthcare costs.
                <br></br>
                <br />
                We are a group of passionate and talented individuals dedicated
                to improving patient outcomes through the use of the most
                effective pharmaceuticals and production techniques.
                <br></br>
                <br />
                Pelikas Healthcare Pvt. Ltd. employs approximately 200 employees
                at its manufacturing facilities. The strength of our
                organization is our highly experienced team.
              </p>
            </div>
            <img
              src={values}
              alt="mission"
              className="px-2 md:px-0 md:rounded-[100%] object-cover w-[450px] animate__animated animate__heartBeat"
            />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Missionandvalue;
