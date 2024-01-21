import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState('open');

    const handleMenu = (option) => {
        setMenu(option);
    }

    return (
        <div >
            <div className=' fixed z-20 top-0 w-full h-14 bg-[#D1CFCA] backdrop-filter backdrop-blur-xl shadow-lg'>
                <div className=' flex justify-between'>
                    <div className='text-2xl font-Truculenta py-3 px-6 md:px-14 cursor-pointer '>
                        <h1><Link to='/'>Shree</Link></h1>
                    </div>
                    {/* this is for desktop */}
                    <div className=' py-4 px-7 hidden sm:block sm:text-sm '>
                        <ul className='flex justify-between font-semibold gap-7 px-8 font-Salsa'>
                            <li className='hover:text-[#9A8565] duration-700 cursor-pointer'><Link to="/">Home</Link></li>
                            <li className='hover:text-[#9A8565] duration-700 cursor-pointer'><Link to="/projectshowcase">Projects</Link></li>
                            <li className='hover:text-[#9A8565] duration-700 cursor-pointer'><Link to="/about">About Us</Link></li>
                            <li className='hover:text-[#9A8565] duration-700 cursor-pointer'><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    
                    {/* This is for smartphones */}
                    <div className={` absolute right-7 top-9 cursor-pointer ${menu === 'open' ? 'hidden' : ''} bg-[#ECE7E1] rounded-lg backdrop-filter backdrop-blur-3xl`}>
                        <ul className=' flex-col test-xs p-6 text-xs font-Salsa'>
                            <li className='cursor-pointer mb-2 border px-2 py-1 border-gray-700 rounded-2xl text-center w-20'><Link to='/'>Home</Link></li>
                            <li className='cursor-pointer mb-2 border px-2 py-1 border-gray-700 rounded-2xl text-center w-20'><Link to='/about'>About Us</Link></li>
                            <li className='cursor-pointer border px-2 py-1 border-gray-700 rounded-2xl text-center w-20'><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div onClick={() => handleMenu('close')} className={`  ${menu === 'close' ? 'hidden' : ''} sm:hidden px-3 py-4 cursor-pointer `}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div onClick={() => handleMenu('open')} className={` px-3 py-4 cursor-pointer ${menu === 'open' ? 'hidden' : ''} sm:hidden `}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
