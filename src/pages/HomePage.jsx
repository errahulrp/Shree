import React from 'react'
import Home from "../components/Home"
import Services from "../components/Services"
import Projects from '../components/Projects'
import Testimonials from "../components/Testimonials";
import UpperFooter from '../components/UpperFooter';

const HomePage = () => {
  return (
    <div>
      <Home/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <UpperFooter/>
    </div>
  )
}

export default HomePage
