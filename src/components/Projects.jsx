import React from 'react'
import image from '../images/bady-abbas-hxi_yRxODNc-unsplash.jpg'
import image1 from '../images/adrian-cuj-o_9YmCY0bag-unsplash.jpg'
import image2 from '../images/donny-jiang-42gFAgdIUC8-unsplash.jpg'
import image3 from '../images/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg'
import image4 from '../images/redd-f-vUwJ8uu_C1M-unsplash.jpg'

const Projects = () => {
    return (
        <div>
            {/* this is for mobile */}
            <div className='sm:hidden mt-10 '>
                <div className='flex justify-center'>
                    <div>
                        <h1 className=' font-Salsa text-lg'>Projects</h1>
                        <div className=' border w-[68px] border-blue-600'></div>
                    </div>
                </div>
                <p className=' text-xs font-Smooch ml-6 mr-6 text-center mt-4'> This is the completed projects by our company and review based on the work will be provided.</p>
                <div className=' flex justify-center mt-8 mx-20'>
                    <img src={image} alt="Project Image" />
                </div>
            </div>

            {/* this is for desktop */}
            <div className=' hidden sm:block'>
                <div className='flex justify-center'>
                    <div>
                        <div className=' ml-10 border-l-2 border-blue-600 h-16 opacity-20'></div>
                        <h1 className=' mt-4 font-Salsa text-2xl'> Projects</h1>
                    </div>
                </div>
                <div className=' flex justify-center mt-10 sm:gap-8 md:gap-10 mx-7'>
                    <img src={image} alt="project Image" className=' duration-700 md:w-40 md:h-80 sm:w-28 sm:h-60 object-cover rounded-2xl border border-blue-200 hover:w-96 hover:h-96' />
                    <img src={image1} alt="project Image" className=' duration-700 md:w-40 md:h-80 sm:w-28 sm:h-60 object-cover rounded-2xl border border-blue-200 hover:w-96 hover:h-96' />
                    <img src={image2} alt="project Image" className=' duration-700 md:w-40 md:h-80 sm:w-28 sm:h-60  object-cover rounded-2xl border border-blue-200 hover:w-96 hover:h-96' />
                    <img src={image3} alt="project Image" className=' duration-700 md:w-40 md:h-80 sm:w-28 sm:h-60  object-cover rounded-2xl border border-blue-200 hover:w-96 hover:h-96' />
                    <img src={image4} alt="project Image" className=' hidden lg:block duration-700 md:w-40 md:h-80 sm:w-28 sm:h-60  object-cover rounded-2xl border border-blue-200 hover:w-96 hover:h-96' />
                </div>
            </div>
        </div>
    )
}

export default Projects