import React from 'react'
import BGimage from '../../assests/about-us-assets/second.jpg'

function About_Pelikas() {
  return (
    <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'>

        <div className='flex max-w-6xl m-auto w-screen h-screen justify-center items-center space-x-16'>

            <img src={BGimage} alt='img'  width={500} className='rounded-full '/>

            <div className=' text-center'>
                <h1 className=' text-green-400 text-xl font-semibold p-6'>
                    WELCOME TO MAYA PELIKAS HEALTHCARE SOLUTION LTD.
                </h1>

                <h1 className=' text-blue-900 text-4xl font-bold pb-6'>Focus on Purity and Quality</h1>

                <p className='text-lg'>Our vision is to grow into a contract manufacturing pharmaceutical company based on advanced technology 
                and research, and to establish ourselves as an intellectually strong player in both the domestic and 
                international markets. Maya Biotech has grown tremendously from a small domestic company to an integrated, 
                research-based, contract manufacturing pharmaceutical company with a strong focus on contract manufacturing.
                <br></br>
                <br></br>
                We have travelled this far as a team of Maya Biotech because of our management’s unwavering “dedication” 
                and “will” to win. Our company is dedicated to providing the highest-quality pharmaceutical products at 
                the most affordable prices to the community in order to contribute to the reduction of healthcare costs. 
                We are confident that our efforts will result in the Company’s continued growth as a contract manufacturer 
                in the years ahead. While we continue to grow our business.</p>
            </div>
        </div>
    </div>
  )
}

export default About_Pelikas