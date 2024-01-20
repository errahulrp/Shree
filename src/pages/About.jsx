import React from 'react';
import image from '../images/nick-wessaert-JI01fn0U7Cg-unsplash.jpg';

const About = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img src={image} alt="Company Image" className="w-full h-full object-cover rotate-180 -ml-10 -mt-20" />
      </div>

      <div className='container mx-auto mt-28 px-4 relative z-10'>
        <div className='text-center mb-20'>
          <h1 className='text-4xl font-bold text-gray-800 font-Salsa'>About Us</h1>
        </div>

        <div className='flex justify-around'>
          <div className='text-center'>
            <h2 className='text-xl font-semibold text-gray-600 font-Truculenta'>Completed Projects</h2>
            <p className='text-6xl text-[#ffc300] mt-2 font-bold'>758</p>
          </div>
          <div className='text-center'>
            <h2 className='text-xl font-semibold text-gray-600 font-Truculenta'>Ongoing Projects</h2>
            <p className='text-6xl text-[#3a5a40] mt-2 font-bold'>24</p>
          </div>
        </div>

        <div className='mt-32'>
          <p className='text-lg text-gray-700 font-Truculenta text-center'>
            Our company is committed to delivering high-quality projects and exceeding customer expectations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum placeat similique nam consequatur, praesentium aut et, incidunt amet quod itaque natus iusto, molestiae magnam recusandae voluptatem sapiente dolore ipsa porro sunt nesciunt suscipit. Aliquid dolorem animi impedit eligendi similique veritatis necessitatibus voluptatem, dolor consectetur hic corporis quaerat magnam inventore molestiae ex quae. Voluptatem qui, repellat libero labore doloribus delectus doloremque vitae ut cum voluptates praesentium accusantium reprehenderit illo laudantium itaque in nesciunt mollitia. Commodi doloribus aperiam, nobis ipsa consequatur nisi nesciunt quis? At nobis excepturi illum molestias tenetur! Ipsa eum a minima quisquam maxime aut libero architecto sed perspiciatis repellendus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
