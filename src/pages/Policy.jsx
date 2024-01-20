import React from 'react'
import { Link } from 'react-router-dom';

const Policy = () => {
  return (
    <div>
      <h1 className=' flex justify-center mt-40 font-Salsa text-3xl mb-6'> Privacy Policy for Shree Architecture</h1>


      <div className=' mx-32 font-Truculenta'>

        <p className='font-Truculenta text-xl'> Last Updated: 2024-01-20 </p>
        <br />

        Welcome to Shree Architecture. This Privacy Policy is designed to help you understand how we collect, use, share, and safeguard your personal information. By accessing or using our website, you agree to the terms outlined in this policy.
        <br />
        <br />
        <p className=' font-Truculenta text-2xl'> Information We Collect</p>
        <br />
        <p className='font-Truculenta text-xl'>Personal Information:</p>

        When you register on our site, subscribe to our newsletter, or fill out a contact form, we may collect personal information such as your name, email address, phone number, and professional credentials. This information is used to provide you with our services and communicate with you.
        <br />
        <br />
        <p className='font-Truculenta text-xl'>  Log Data:</p>

        We automatically collect certain information when you visit our website. This may include your IP address, browser type, device information, pages visited, and the time and date of your visit. This data helps us analyze user behavior and improve the functionality of our site.
        <br />
        <br />
        <p className=' font-Truculenta text-2xl'>   Use of Information</p>
        <br />

        We use the collected information for various purposes, including:
        <br />
        <br />
        <p className='font-Truculenta text-xl'> Service Provision:</p>
        -To provide and maintain our website and services.
        <br />
        -To notify you about changes to our services.
        <br />
        <br />
        <p className='font-Truculenta text-xl'> Communication:</p>

        -To respond to your inquiries, comments, or questions. <br />
        -To send periodic emails and newsletters related to our services. You can opt-out of these communications at any time. <br /> <br />
        <p className='font-Truculenta text-xl'> Analytics:</p>
        -To analyze trends, track user activities, and gather demographic information for internal use. <br />
        <br />
        <p className=' font-Truculenta text-2xl'> Cookies and Tracking Technologies</p>
        <br />
        We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that enable us to recognize your preferences and optimize site functionality. You can modify your browser settings to reject cookies, but this may affect your ability to access certain features of our site.
        <br />
        <br />
        <p className=' font-Truculenta text-2xl'>Data Security</p>
        <br />
        We prioritize the security of your personal information. We implement reasonable security measures to protect against unauthorized access, alteration, disclosure, or destruction of your data.
        <br /> <br />
        <p className=' font-Truculenta text-2xl'>Third-Party Disclosure</p>
        <br />
        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share your information with trusted third parties who assist us in operating our website or providing services, as long as they agree to keep this information confidential.
        <br /><br />
        <p className=' font-Truculenta text-2xl'>Changes to Privacy Policy</p>
        <br />
        We reserve the right to modify this privacy policy at any time. Changes will be effective immediately upon posting on our website. We encourage you to review this page periodically to stay informed about how we are protecting your information.
        <br /> <br />
        <p className=' font-Truculenta text-2xl'> Your Rights</p>
        <br />
        You have the right to access, correct, or delete your personal information. If you have any concerns about the accuracy of your data or wish to exercise your rights, please contact us at <Link to='/contact' className=' text-blue-900'>Click Here</Link>.
        <br /><br />
        <p className=' font-Truculenta text-2xl'> Contact Us</p>
        <br />
        If you have any questions, concerns, or suggestions regarding our privacy policy, please contact us at [your contact email].
      </div>
    </div>
  )
}

export default Policy;