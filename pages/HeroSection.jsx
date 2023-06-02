import Link from 'next/link';
import React, { useRef, useState} from 'react';
import { init, sendForm } from 'emailjs-com';




const HeroSection = () => {
  const [email, setEmail] = useState('');
const [isEmailSent, setIsEmailSent] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
  
    sendForm('service_ihk59ca', 'template_26t3hyf', e.target, 'KGgbWqKfOtQLYUVrZ')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setIsEmailSent(true);
        setTimeout(() => {
          setIsEmailSent(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
    setEmail('');

  };
  return (

    <div className="flex flex-wrap items-center justify-center bg-black w-screen h-screen relative px-20 z-20 mb-10">
       <video autoPlay loop muted className="w-full h-full object-cover absolute top-0 left-0 opacity-50 -z-10 ">
        <source src="./imgs/anime.mp4" type="video/mp4" />
      </video>
     
      <div className="w-screen md:px-60 flex justify-center items-center text-center">
        <div className="text-center md:text-left flex z-50 flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 mb-4 animate-gradient ">Enter a World of Fantastical Tales and Memorable Characters</h1>
          <p className="text-lg md:text-xl rounded-lg mb-6 text-pink-300 px-5">Explore the world of anime and discover new favorites.</p>
          
          <div className="flex items-center justify-center md:justify-start">
           <form  onSubmit={sendEmail} className='flex'>
            <input value={email}
        onChange={(e) => setEmail(e.target.value)} type="email" name="user_email"  placeholder="Enter your email" className="py-2 px-4  rounded-l-lg border border-gray-300 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500 focus:outline-none" />
            <input  type='submit' value='Subscribe' className="py-2 px-4 bg-blue-500 bg-gradient-to-r from-pink-400 to-red-500 text-white rounded-r-lg"/>
            </form>
          </div>
        </div>
      </div>
      {isEmailSent && (
        <p
          className="w-fit px-10 py-5 text-white bg-green-400"
        >
          Email sent successfully!
        </p>
      )}
    </div>
  );
};

export default HeroSection;
