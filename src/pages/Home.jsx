import React from 'react'

import Sliderimage from '../components/Sliderimage'
import  Navbar  from  '../components/Navbar'
import Ourexpertise from '../components/Ourexpertise'
import Aboutussection from '../components/Aboutussection'
import Chooseus from '../components/Chooseus'
import Productlist from '../components/Productlist'

import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
    <Navbar />
     <Sliderimage />
    <Ourexpertise />
    <Aboutussection />
    <Chooseus />
   <Productlist />

   <Footer />
    </div>
  )
}

export default Home
