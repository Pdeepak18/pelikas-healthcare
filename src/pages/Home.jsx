import React from 'react'
import Sidenav from '../components/Sidenav'
import Sliderimage from '../components/Sliderimage'
import  Navbar  from  '../components/Navbar'
import Ourexpertise from '../components/Ourexpertise'
import Aboutussection from '../components/Aboutussection'


const Home = () => {
  return (
    <div>
    <Navbar />
     <Sliderimage />
    <Ourexpertise />
    <Aboutussection />
    </div>
  )
}

export default Home
