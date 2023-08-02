import React from 'react'

import Sliderimage from '../components/Sliderimage'
import  Navbar  from  '../components/Navbar'
import Ourexpertise from '../components/Ourexpertise'
import Aboutussection from '../components/Aboutussection'
import Chooseus from '../components/Chooseus'
import Productlist from '../components/Productlist'


const Home = () => {
  return (
    <div>
    <Navbar />
     <Sliderimage />
    <Ourexpertise />
    <Aboutussection />
    <Chooseus />
   <Productlist />
    </div>
  )
}

export default Home
