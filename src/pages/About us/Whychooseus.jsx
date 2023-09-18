import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import misson from "../../assests/about-us-assets/why-choose.webp";
import Footer from "../../components/Footer";
import "animate.css";
import styles from "../../components/product/product.module.css";


const Whychooseus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-full ">
      <Navbar />
      <div className="relative lg:top-[72px] lg:h-[100vh]   ">
        <div className=" ">
          <div className="flex  flex-col-reverse md:flex-row md:justify-center md:items-center gap-5 py-10 md:py-20 md:px-10 ">
            <div className="flex flex-col md:w-[55%] animate__animated animate__backInLeft">
              <h1 className=" text-blue-900 font-bold text-2xl md:text-5xl ff-saira text-left md:text-center px-2 md:px-0">
                {" "}
                Why Choose Us{" "}
              </h1>
              <p className="text-md md:text-lg pt-5 md:pt-10 ff-saira px-2 md:px-5 leading-6 text-justify">
                <p>
                  Owing to perfection and quality oriented approach, we have
                  carved niche in the industry by offering an enormous grade
                  array of medicines. Our medicines are quality tested and
                  available in various specifications. A number of
                  pharmaceutical companies are operating in the market but Maya
                  Biotech has successfully broken the clutter in pharmaceutical
                  contract manufacturing and made a mark of its own in the
                  medical domain. The key factors for which we have received
                  appreciation from our clients all across the globe include:
                </p>
                <br />
                <p>
                  High quality oriented manufacturing with right
                  overages/Non-negotiable Best API and Packaging, with
                  continuous RD to develop more effective and Improved pharma
                  Products.
                </p>
                <br />
                <p>Long experience and extensive knowledge of industry.</p>
                <br />
                <p>Timely delivery of commitments.</p>
                <br />
                <p>
                  Customer focused approach with more than satisfaction level.
                </p>
                <br />
                <p>
                  Proven ability in successful execution ot small as well as
                  bulk orders.
                </p>
                <br />
                <p>State-of-the-art infrastructure base</p>
                <br />
                <p>Advanced production unit</p>
                <br />
                <p>Cost-effective prices</p>
                <br />
                <p>Experienced manpower</p>
                <br />
                <p>Ethical business policies</p>
              </p>
            </div>
            <section className={`${styles["cart-info"]} `}>
              <div className={`${styles["cart-info-inner"]}  `}>
                <img
                  src={misson}
                  alt="mission"
                  className="px-2 md:px-0  object-cover w-[450px] h-[100%] animate__animated animate__heartBeat"
                />
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Whychooseus;
