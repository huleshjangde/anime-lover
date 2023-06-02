import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Tcard from './Tcard';
import Link from 'next/link';
import './style.css'

import SectionHeader from './components/SectionHeader';
import { CustomNextArrow,CustomPrevArrow } from './components/Sliderbtn';


const Treading = () => {
  const [Svalue, setValue] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
    console.log(Svalue)

      if (screenWidth >= 1024) {
        setValue(3);
        
      } else if (screenWidth >= 600) {
        setValue(2);
      } else {
        setValue(1);
      }
    };

    handleResize(); // Call the function initially to set the initial value

    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

//next-pre components




  const settings = {
    className: "centerCard",
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: Svalue,
    slidesToScroll: Svalue,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  

  return (
    <div className='md:px-20 md:py-10 w-screen h-full mt-10  relative'>
     
      <SectionHeader title="Now Trending"/>
      <Slider {...settings}>
        

        <Link href='/Tcard'><Tcard /></Link>
        <Link href='/Tcard'><Tcard /></Link>
        <Link href='/Tcard'><Tcard /></Link>
        <Link href='/Tcard'><Tcard /></Link>
        <Link href='/Tcard'><Tcard /></Link>
        <Link href='/Tcard'><Tcard /></Link>
        {/* Add more cards as needed */}
      </Slider>
    </div>
  );
};

export default Treading;
