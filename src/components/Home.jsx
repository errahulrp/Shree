import React from 'react';
import myImage from '../images/kam1.jpg'
import hum from '../images/ham.jpg'

const Home = () => {
    return (
        <div  >
            <div className=' absolute hidden sm:block opacity-10 mt-28 ml-28  text-gray-600 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth=" 0.1" stroke="currentColor" className=" w-96 h-96 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
            </div>
            <div className='flex justify-center mt-10 mr-9 sm:mr-0 sm:mt-0 sm:items-center sm:h-screen '>
                {/* this is for mobile */}
                <div className='w-44 h-44 bg-[#111516] sm:hidden mt-16'>
                    <img src={hum} alt="Main Image" className=' absolute mt-8 ml-8 w-48 h-48 object-cover' />
                    <div className=' absolute w-44 h-44 mt-14 ml-14 border-gray-400 border-b-2 border-r-2 '>
                    </div>
                    <div className=' absolute -ml-7 mt-72  font-Truculenta'>
                        <h4 className=' text-[#292D2E] mt-1 '> NAME OF COMPANY</h4>
                        <p className=' border border-[#292D2E] mt-1 w-36'></p>
                        <h4 className='text-[#292D2E] mt-3'>Architecture</h4>
                        <p className=' border border-[#292D2E] mt-1 w-[120px]'></p>
                        <h4 className='text-[#292D2E] mt-3' > Construction</h4>
                        <p className=' border border-[#292D2E] mt-1 w-[100px]'></p>
                        <h4 className='text-[#292D2E] mt-3'> Consultant</h4>
                        <p className=' border border-[#292D2E] mt-1 w-[80px]'></p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth=" 0.1" stroke="currentColor" className=" absolute w-60 h-60 ml-10 mt-72 opacity-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                    <div className=' absolute mt-[490px] ml-32 sm:hidden shadow-xl'>
                        <button className='px-4 py-1 bg-[#ECE7E1] text-xs backdrop-filter backdrop-blur-sm font-Smooch rounded-3xl'> Let's Connect</button>
                    </div>
                </div>

                {/* This is for the desktop     */}
                <div className='h-full w-[50%] bg-[#D1CFCA]  hidden sm:block '>
                    <div className=' font-Salsa'>
                        <div className=' flex justify-center mt-[40%]'>
                            <div>
                                <h4 className=' text-[#292D2E] mt-[50%] sm:mt-[35%]'> Name of the Company</h4>
                                <p className=' border bottom-1 border-[#E4E8E9] mt-1 w-42'></p>
                            </div>
                        </div>

                        <div className=' flex justify-center mt-1'>
                            <div>
                                <h4 className=' text-[#292D2E] mt-10 text-3xl'>Architecture</h4>
                                <p className=' border bottom-1 border-[#E4E8E9] mt-1 w-42'></p>
                            </div>
                        </div>
                        <div className=' flex justify-center mt-1'>
                            <div>
                                <h4 className=' text-[#292D2E] mt-10 text-3xl'>Construction</h4>
                                <p className=' border bottom-1 border-[#E4E8E9] mt-1 w-42'></p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={myImage} alt="Main Image" className={` hidden sm:block  sm:h-[50%] sm:w-[50%] lg:w-[60%] min-h-screen object-cover `} />
                <div className=' absolute hidden md:block'>
                    <button className='px-8 py-3 bg-transparent backdrop-filter backdrop-blur-sm text-[#ECC341] hover:text-black rounded-3xl font-Truculenta hover:bg-[#ECC341] duration-700'> Let's Connect</button>
                </div>
            </div>

        </div>
    );
};

export default Home;