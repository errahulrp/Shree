import React from 'react'

const About = () => {
  return (
    <div className=' hidden sm:block'>
      <div className=' flex justify-center '>
        <h1 className=' text-black mt-24 font-Salsa text-3xl'> About Us </h1>

      </div>
      <div className='flex justify-center font-Truculenta gap-20 mt-20 '>
        <div className=' text-center'>
          <h1 className=' text-xl'> Completed Projects</h1>
          <p className=' text-6xl mt-4'>758</p>
        </div>
        <div className=' text-center'>
          <h1 className=' text-xl'>OnGoing Projects</h1>
          <p className=' text-6xl mt-4' >24</p>
        </div>
      </div>
    </div>
  )
}

export default About
