import React from 'react'
import background from '../images/sirisvisual-J4M9FKPEaUA-unsplash.jpg'

const Footer = () => {
    return (
        <div>
            {/* This is for the Desktop */}
            <div className=' hidden sm:block '>
                <div className='flex justify-center'>
                    <img src={background} alt="Background image" className=' sm:mt-48 md:mt-60 w-[90%] sm:h-48 md:h-60 lg:h-72 object-cover rounded-3xl opacity-75' />
                </div>
                <div className=' flex justify-center'>
                    <h1 className=' absolute sm:text-3xl md:text-4xl font-Salsa sm:-mt-28 md:-mt-32 lg:-mt-40 opacity-100 '>LET'S DISSCUSS YOUR PROJECT</h1>
                    <div className=' absolute sm:-mt-16 md:-mt-16 lg:-mt-24 '>
                        <button className=' bg-indigo-600 text-white hover:text-black hover:bg-[#ECE7E1] px-4 py-1 rounded-3xl'>CONTACT US</button>
                    </div>
                </div>
                <div className=' flex flex-col items-center mt-20 mb-10 '>
                    <div className=' flex sm:gap-16 md:gap-28 lg:gap-36 items-center'>
                        <div className=' text-4xl font-Salsa '>Shree</div>
                        <div>
                            <ul className=' flex gap-6 font-Truculenta '>
                                <li>ABOUT US</li>
                                <li>OUR SERVICES</li>
                                <li>PROJECTS</li>
                                <li>MEDIA</li>
                            </ul>
                        </div>
                        <div className=' flex gap-5'>
                            <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className=" w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M22 4c-0.78 0.463-2.345 1.094-3.265 1.276-0.027 0.007-0.049 0.016-0.075 0.023-0.813-0.802-1.927-1.299-3.16-1.299-2.485 0-4.5 2.015-4.5 4.5 0 0.131-0.011 0.372 0 0.5-3.353 0-5.905-1.756-7.735-4-0.199 0.5-0.286 1.29-0.286 2.032 0 1.401 1.095 2.777 2.8 3.63-0.314 0.081-0.66 0.139-1.02 0.139-0.581 0-1.196-0.153-1.759-0.617 0 0.017 0 0.033 0 0.051 0 1.958 2.078 3.291 3.926 3.662-0.375 0.221-1.131 0.243-1.5 0.243-0.26 0-1.18-0.119-1.426-0.165 0.514 1.605 2.368 2.507 4.135 2.539-1.382 1.084-2.341 1.486-5.171 1.486H2C3.788 19.145 6.065 20 8.347 20 15.777 20 20 14.337 20 8.999c0-0.086-0.002-0.266-0.005-0.447C19.995 8.534 20 8.517 20 8.499c0-0.027-0.008-0.053-0.008-0.08-0.003-0.136-0.006-0.263-0.009-0.329 0.79-0.57 1.475-1.281 2.017-2.091-0.725 0.322-1.503 0.538-2.32 0.636C20.514 6.135 21.699 4.943 22 3.999z" />
                            </svg></button>
                            <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12,2C6.477,2,2,6.477,2,12c0,4.237,2.636,7.855,6.356,9.312c-0.087-0.791-0.167-2.005,0.035-2.868 c0.182-0.78,1.172-4.971,1.172-4.971s-0.299-0.599-0.299-1.484c0-1.391,0.806-2.428,1.809-2.428c0.853,0,1.265,0.641,1.265,1.408 c0,0.858-0.546,2.141-0.828,3.329c-0.236,0.996,0.499,1.807,1.481,1.807c1.777,0,3.143-1.874,3.143-4.579 c0-2.394-1.72-4.068-4.177-4.068c-2.845,0-4.515,2.134-4.515,4.34c0,0.859,0.331,1.781,0.744,2.282 c0.082,0.099,0.093,0.186,0.069,0.287c-0.076,0.316-0.244,0.995-0.277,1.134c-0.043,0.183-0.145,0.222-0.334,0.133 c-1.249-0.582-2.03-2.408-2.03-3.874c0-3.154,2.292-6.052,6.608-6.052c3.469,0,6.165,2.472,6.165,5.776 c0,3.447-2.173,6.22-5.189,6.22c-1.013,0-1.966-0.527-2.292-1.148c0,0-0.502,1.909-0.623,2.378 c-0.226,0.868-0.835,1.958-1.243,2.622C9.975,21.843,10.969,22,12,22c5.522,0,10-4.478,10-10S17.523,2,12,2z" />
                            </svg></button>
                            <button> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className='w-7 h-7'>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z"></path>
                            </svg></button>
                        </div>
                    </div>
                    <div className=' border-b-2 border-black sm:w-[90%] md:w-[90%] lg:w-[60%] mt-3'></div>
                    <div className=' flex justify-between font-Truculenta sm:gap-60 md:gap-96 lg:gap-[480px] mt-3'>
                        <div>2019 by Shree Group. Inc All right Reserved.</div>
                        <div> Privacy Policy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
