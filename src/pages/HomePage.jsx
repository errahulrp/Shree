import React, { Suspense } from 'react'
import Home from "../components/Home"
import Services from "../components/Services"

import Testimonials from "../components/Testimonials";
import UpperFooter from '../components/UpperFooter';
const Projects = React.lazy(() => import("../components/Projects"));

const HomePage = () => {
  return (
    <div>
      <Home />
      <Services />
      <Suspense fallback={ <p> This is loading...</p>} >
        <Projects />
      </Suspense>
      <Testimonials />
      <UpperFooter />
    </div>
  )
}

export default HomePage
