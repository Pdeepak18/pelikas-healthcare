import {React} from 'react'
import SimpleImageSlider from "react-simple-image-slider";




const images = [
    {url:require('../assests/image-slider.jpg')},
    {url:"https://www.akums.in/wp-content/uploads/2023/07/Akums-CDMO-RD-scientist.webp"},
    {url:"https://www.akums.in/wp-content/uploads/2023/07/Akums-CDMO-RD-scientist.webp"}

]



const Sliderimage = () => {
  return (
    <div className=''>
      <SimpleImageSlider
        width={1280}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}

export default Sliderimage
