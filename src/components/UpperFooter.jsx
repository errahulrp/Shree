import React from 'react';
import background from '../images/sirisvisual-J4M9FKPEaUA-unsplash.jpg'
import { Link } from 'react-router-dom';

const UpperFooter = () => {
    return (
        <div className=' hidden sm:block'>
            <div className='flex justify-center'>
                <img src={background} alt="Background image" className=' sm:mt-48 md:mt-60 w-[90%] sm:h-48 md:h-60 lg:h-72 object-cover rounded-3xl opacity-75' />
            </div>
            <div className=' flex justify-center'>
                <h1 className=' absolute sm:text-3xl md:text-4xl font-Salsa sm:-mt-28 md:-mt-32 lg:-mt-40 opacity-100 '>LET'S DISSCUSS YOUR PROJECT</h1>
                <div className=' absolute sm:-mt-16 md:-mt-16 lg:-mt-24 '>
                    <button className=' bg-indigo-600 text-white hover:text-black hover:bg-[#ECE7E1] px-4 py-1 rounded-3xl'><Link to="/contact">CONTACT US</Link></button>
                </div>
            </div>
        </div>
    )
}

export default UpperFooter
