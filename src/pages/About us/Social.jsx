import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import misson from "../../assests/about-us-assets/mission.jpg";
import Footer from "../../components/Footer";
import 'animate.css';
import styles from "../../components/product/product.module.css";

const Social = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-full ">
      <Navbar />
      <div className="relative lg:top-[72px] lg:h-[100vh]   ">
        <div className=" ">
          {/* mission */}
          <div className="flex  flex-col-reverse md:flex-row md:justify-center gap-5 py-10 md:py-20 md:px-10 ">
            <div className="flex flex-col md:w-[55%] animate__animated animate__backInLeft">
              <h1 className=" text-blue-900 font-bold text-2xl md:text-5xl ff-saira text-left md:text-center px-2 md:px-0">
                {" "}
                Social Responsibilty{" "}
              </h1>
              <p className="text-md md:text-lg pt-5 md:pt-10 ff-saira px-2 md:px-5 leading-6 text-justify">
                <p>
                  We understand our customers’ and stakeholders’ expectations
                  and trust and strive to deliver superior service while
                  ensuring a better world. We support environmental action in
                  collaboration with other community and volunteer
                  organizations. We support energy efficiency measures that
                  contribute to global sustainability. We strive to leave future
                  generations with a clean and healthy planet, and we are taking
                  concrete steps to accomplish this goal. We recognize that
                  environmental degradation has no effect on economic growth.
                </p>
                <br />
                <p>
                  We remain steadfast in our commitment to environmental
                  standards.
                </p>
                <br />
                <p>
                  We remain steadfast in our commitment to environmental
                  standards.
                </p>
                <br />
                <p>
                  We believe that for development to be sustainable, it must
                  coexist with the environment.
                </p>
                <br />
                <p>
                  We've made an effort to increase the amount of green space
                  surrounding our facilities.
                </p>
                <br />
                <p>
                  We must constantly educate and reward our employees for
                  keeping the workplace clean.
                </p>
                <br />
                <p>
                  We believe in giving back to the community and preserving its
                  culture, values, and traditions in order to ensure a just and
                  equitable society. As a society, we have a responsibility to
                  meet the needs of the community, which includes improving the
                  world and assisting individuals in living healthier and
                  happier lives.
                </p>
                <br />
                <p>
                  We sought to assist those who struggle to meet their basic
                  needs. Our intention was not to limit our efforts to financial
                  assistance; rather, we desired to assume a longer-term role of
                  caring for the community’s overall well-being.
                </p>
              </p>
            </div>
            <section className={`${styles["cart-info"]} `}>
              <div className={`${styles["cart-info-inner"]}  `}>
            <img
              src={misson}
              alt="mission"
              className="px-2 md:px-0 md:rounded-[100%] object-cover w-[450px] h-[300px] animate__animated animate__heartBeat"
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

export default Social;
