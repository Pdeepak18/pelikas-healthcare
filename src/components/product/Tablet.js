import React from 'react'
import Navbar from '../Navbar'
// import Footer from '../Footer'
import { useLocation } from 'react-router-dom'
import Contactus from './Contactus';

export default function Tablet({imgURL, desc}) {
  const location = useLocation();
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col md:flex-row justify-center items-center h-screen '>
            <img src={location.state.imgURL} width={400}/>
            <div className=' space-y-10 mr-16 border-2 border-gray p-9 rounded-2xl'>
                <h1 className=' text-5xl text-blue-700 font-semibold'>Tablet</h1>
                <ul className='w-[400px] leading-10'>
                    <li className=' border-b border-slate-400 text-lg p-4 text-slate-500 font-medium'>{location.state.desc}</li>
                    <li className=' border-b border-slate-400 text-lg p-4 text-slate-500 font-medium'>Form: Liquid</li>
                    <li className=' border-b border-slate-400 text-lg p-4 text-slate-500 font-medium'>Form: Liquid</li>
                    <li className=' border-b border-slate-400 text-lg p-4 text-slate-500 font-medium'>Form: Liquid</li>
                </ul>
            </div>
            <Contactus/>
        </div>
        
        {/* <Footer/> */}
    </div>
  )
}
