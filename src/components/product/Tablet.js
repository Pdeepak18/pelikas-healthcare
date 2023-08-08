import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function Tablet() {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col md:flex-row justify-center items-center h-screen '>
            <img src='https://i0.wp.com/www.mayabiotechindia.com/wp-content/uploads/2023/05/b9ad65c3-23bb-408e-aef9-6c542de42823-removebg-preview.png?w=623&ssl=1' width={400}/>
            <div className=' space-y-10'>
                <h1 className=' text-5xl text-blue-700 font-semibold'>Tablet</h1>
                <ul className='w-[400px] leading-10'>
                    <li className=' border-b border-slate-400 text-lg p-4 text-slate-500 font-medium'>Form: Liquid</li>
                    <li className=' border-b border-slate-400 text-lg p-4 text-slate-500 font-medium'>Form: Liquid</li>
                    <li className=' border-b border-slate-400 text-lg p-4 text-slate-500 font-medium'>Form: Liquid</li>
                    <li className=' border-b border-slate-400 text-lg p-4 text-slate-500 font-medium'>Form: Liquid</li>
                </ul>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
