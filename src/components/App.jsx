import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../pages/HomePage";
import Footer from "./Footer";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Policy from '../pages/Policy';
import ProjectShowcase from '../pages/ProjectShowcase';

const App = () => {
  return (
    <BrowserRouter>
      <div className="hidden md:block overflow-hidden"> {/* Hide on mobile devices */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/projectshowcase' element={<ProjectShowcase />} />
        </Routes>
        <Footer />
      </div>

      {/* Display a message for mobile devices */}
      <div className="block md:hidden text-center p-4">
        <p>Please view this site on a desktop device.</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
