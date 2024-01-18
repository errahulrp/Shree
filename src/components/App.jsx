import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../pages/HomePage";
import Footer from "./Footer";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Policy from '../pages/Policy';

const App = () => {
  return (

    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default App;
