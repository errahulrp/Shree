import React from 'react'
import ham from '../images/ham.jpg'

const Services = () => {
    return (
        <div>
            {/* This is for SmartPhone */}
            <div className=' sm:hidden '>
                <div className=' mt-[396px]'>
                    <div className=' flex justify-center'>
                        <div>
                            <h1 className=' font-Salsa '>OUR SERVICES</h1>
                            <div className=' border w-[104px] border-blue-600'></div>
                        </div>
                    </div>
                    <p className='text-xs font-Smooch mt-6 ml-6 mr-6 text-center '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, distinctio. Reiciendis hic similique enim animi, soluta corrupti rem nam veniam odio odit laborum doloremque ratione!</p>
                </div>

            </div>

            {/* This is for desktop */}
            <div className='hidden sm:block  '>

                <div className=' h-[482px] bg-[#E8DFD8] mt-10 ml-80'>
                    <img src={ham} alt=" Product Image" className=' w-[600px] h-[444px] -ml-60 pt-10 object-cover' />

                   <div className=' flex justify-center'>
                   <div className=' absolute -mt-96 ml-44 hidden lg:block opacity-10 text-[#6F5438]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.1" stroke="currentColor" className="w-96 h-96">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                        </svg>
                    </div>
                   </div>

                    <div className=' absolute -mt-80 md:ml[200px] lg:ml-[400px] md:text-white lg:text-black'>
                        <h3 className=' text-2xl font-Salsa '> OUR SERVICES</h3>
                        <p className=' mt-2 md:text-white lg:text-[#667D75] font-Truculenta'>Land Development</p>
                        <p className=' mt-4 font-Truculenta mr-28'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam perferendis dolorum ab tempore magni, atque quaerat aut maiores vitae dolor, nihil commodi natus officiis omnis architecto quod alias. Quia eaque minus magnam minima laborum aspernatur, molestias, repellendus architecto facere id odio fugiat provident, ratione exercitationem.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
