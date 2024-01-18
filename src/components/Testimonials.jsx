import React, { useState } from 'react'

const Testimonials = () => {
  const testimonialsData = [

    {
      text: "A fantastic architectural journey! The site's content is both informative and visually captivating. Great job!",
      author: "Sara Thompson",
      city: "Delhi"
    },
    {
      text: "As an architecture enthusiast, I'm impressed by the site's extensive collection. It's a go-to place for inspiration.",
      author: "Rahul Kapoor",
      city: "Bangalore"
    },
    {
      text: "The architecture website is a treasure trove of design ideas. I enjoyed exploring the diverse styles showcased.",
      author: "Priya Sharma",
      city: "Mumbai"
    },
    {
      text: "Kudos to the creators for a well-organized and visually appealing platform. It's a must-visit for anyone passionate about architecture.",
      author: "Amit Patel",
      city: "Chennai"
    },
    {
      text: "The architecture site is a masterpiece, offering a delightful mix of modern and traditional designs. A great resource for professionals and enthusiasts alike!",
      author: "Neha Kumar",
      city: "Hyderabad"
    },
    {
      text: "I stumbled upon this website and was pleasantly surprised. The content is engaging, and the user interface is seamless. A thumbs up from a satisfied visitor!",
      author: "Rajesh Verma",
      city: "Kolkata"
    },
    {
      text: "The site provides a fresh perspective on architecture. It's evident that a lot of thought has gone into curating the content. Well done!",
      author: "Ayesha Khan",
      city: "Ahmedabad"
    },
    {
      text: "A user-friendly platform with a plethora of architectural wonders. The site has become my go-to for inspiration and ideas.",
      author: "Varun Gupta",
      city: "Pune"
    },
    {
      text: "I appreciate the diversity of architectural styles showcased on the site. It's like a virtual tour around the world of design!",
      author: "Ananya Joshi",
      city: "Jaipur"
    },
    {
      text: "The website is a valuable resource for students like me studying architecture. It makes learning enjoyable and inspiring.",
      author: "Aditya Singh",
      city: "Lucknow"
    },
    {
      text: "I love the curated selection of projects on the architecture site. It's evident that the team has a keen eye for quality and creativity.",
      author: "Kavita Patel",
      city: "Chandigarh"
    },
    {
      text: "A visually stunning platform that showcases the beauty of architectural design. I found the site both informative and visually pleasing.",
      author: "Rajiv Malhotra",
      city: "Coimbatore"
    },
    {
      text: "The architecture website is a gem for those seeking inspiration for their own projects. The variety of designs is impressive!",
      author: "Preeti Desai",
      city: "Nagpur"
    },
    {
      text: "Exploring the site felt like a virtual tour through architectural wonders. It's a testament to the creativity and innovation in the field.",
      author: "Arun Khanna",
      city: "Surat"
    }
  ]

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prveReview) => (prveReview + 1) % testimonialsData.length);

  }

  const preReview = () => {
    setCurrentReview((preReview) => (preReview - 1 + testimonialsData.length) % testimonialsData.length);
  }



  return (
    <div>
      {/* this is for mobile  */}
      <div className=' sm:hidden'>
        <div className=' flex justify-center'>

        </div>
      </div>

      {/* This is for desktop */}
      <div className=' hidden sm:block '>
        <div className=' flex justify-center mt-20 mb-16'>
          <div>
            <h1 className=' text-2xl font-Salsa'>REVIEW'S</h1>
            <div className='border-b-8 -mt-4  border-purple-200'></div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-1/2 rounded-3xl border border-black mb-14'>
            <h1 className='m-10 mb-5'>{testimonialsData[currentReview].text}</h1>
            <p className='text-right mr-8 mb-5'>
              - {testimonialsData[currentReview].author}, {testimonialsData[currentReview].city}
            </p>
          </div>
        </div>
        <div className=' flex justify-center sm:gap-96 md:gap-[610px] lg:gap-[840px] -mt-40'>
          <button onClick={preReview}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="w-10 h-10 text-gray-300 hover:text-gray-900">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          </button>
          <button onClick={nextReview}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="w-10 h-10  text-gray-300 hover:text-gray-900">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
