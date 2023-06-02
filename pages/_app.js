import 'tailwindcss/tailwind.css';
import Navbar from './Navbar';
import './style.css';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
        console.log('Application is loading...');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <>
  

      <Navbar className='' />

      {loading ? (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
) : (<>
  <div className='mb-16 md:mb-10'>

  </div>
  <Component {...pageProps} /></>
)}


      <Footer />

    </>
  );
};

export default MyApp;
