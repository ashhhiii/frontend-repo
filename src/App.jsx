import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import AboutPage from './Components/AboutPage'
import Eyes from './Components/eyes'
import Features from './Components/Features'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className ='w-full h-screen bg-zinc-900 text-white '>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <AboutPage/>
      <Eyes/>
      <Features/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
