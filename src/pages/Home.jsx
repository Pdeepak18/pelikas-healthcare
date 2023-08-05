import React from 'react'

import Sliderimage from '../components/Sliderimage'
import  Navbar  from  '../components/Navbar'
import Ourexpertise from '../components/Ourexpertise'
import Aboutussection from '../components/Aboutussection'
import Chooseus from '../components/Chooseus'
import Productlist from '../components/Productlist'
import Faq from '../components/Faq'
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
   {/* <Faq/> */}
   <Footer />
    </div>
  )
}

export default Home
