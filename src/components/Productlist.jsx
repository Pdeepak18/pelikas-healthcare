import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Height } from '@mui/icons-material';



const Productlist = () => {

const imagesUrl =[
    {
        url: require("../assests/Liquid-Suspension-Injection-1.webp"),
      },
      {
        url: require("../assests/Metered-Dose-Inhaler-products-1-1.webp"),
      },
      {
        url: require("../assests/Metered-Dose-Nasal-Spray-1.webp"),
      },
  
      {
        url: require("../assests/Moxifloxcin-Eye-Drop-Third-Party-Manufacturing.webp"),
      },
      {
        url: require("../assests/Nasal-Spray-Drops-manufacturer-1.webp"),
      },
      {
        url: require("../assests/Ophthalmic-Drops.webp"),
      },
      {
        url: require("../assests/Oral-Sprays-MANUFACTURING.webp"),
      },
      {
        url: require("../assests/Pre-Filled-Syringe-Injection-third-party-Manufacturing.webp"),
      },
  
      {
        url: require("../assests/Radiology-Contrast-Injections.webp"),
      },
      {
        url: require("../assests/Nasal-Spray-Drops-manufacturer-1.webp"),
      },
    ]

    const LeftArrow = require("../assests/left-arrow.eebfd3c8.svg")
    const RightArrow = require("../assests/right-arrow.c040b56c.svg")
    

    const settings = {
        dots: true,
        infinite: true,
        
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        lazyLoad: true,
        autoplay: true,
      speed: 1000,
      pauseOnHover: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
     
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='relative -top-[140px] md:top-0 p-5 overflow-x-hidden overflow-y-hidden'>
       
        <Slider {...settings}>

         {imagesUrl.map((item, index) =>{
            return(
                <div className='object-contain'>
                <img src={item.url} alt="" className='object-cover' style={{ width: 400,padding:"10px",height:"300px",paddingBottom:"30px" }} />
            </div>
            )
            
         })}
        </Slider>
      </div>
  )
}

export default Productlist;
