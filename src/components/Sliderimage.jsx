import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Sliderimage() {


  const styles = {targetDiv: { height: 'calc(100vh - 110px)'}}

  const slides = [
    {
      url: require("../assests/Akums-CDMO-RD-scientist.webp"),
    },
    {
      url: require("../assests/Akums-CDMO-banner-RD-scientist-image-inside-a-capsule-1.webp"),
    },
    {
      url: require("../assests/Akums-CDMO-banner-having-globe-to-depict-global-presence.webp"),
    },

    {
      url: require("../assests/Akums-CDMO-tagline-depicting-happy-family.webp"),
    },
    {
      url: require("../assests/Akums-CDMO-tagline-depicting-happy-family.webp"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={styles.targetDiv} className='w-full p-3  m-auto mt-20 px-auto relative group border-solid border-1 border-red-900'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=' w-full h-[250px] lg:h-full rounded-xl  bg-center bg-cover  lg:bg-cover bg-no-repeat	 duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[30%] lg:top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>

      <BsChevronCompactLeft onClick={prevSlide} size={30} className='hidden md:block'/>
        <BsChevronCompactLeft onClick={prevSlide} size={20} className='block md:hidden'/>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[30%] lg:top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide}size={30} className='hidden md:block'/>
        <BsChevronCompactRight onClick={nextSlide}size={20} className='block md:hidden'/>
      </div>
      <div className='flex  justify-center relative bottom-6 md:bottom-0 lg:py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Sliderimage;