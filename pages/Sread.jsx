import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Tcard from './Tcard';
import Link from 'next/link';
import ShortCard from './ShortCard';
import { CustomNextArrow,CustomPrevArrow } from './components/Sliderbtn';
import { data } from '../data';



import SectionHeader from './components/SectionHeader';

const Sread = () => {

    const [Svalue, setValue] = useState(3);
    const [center, setcenter] = useState({})

    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
  
        if (screenWidth >= 1024) {
          setValue(3);
          setcenter({ className: "center",
          centerMode: true})
          
        } else if (screenWidth >= 600) {
          setValue(2);
          setcenter({})
        } else {
          setValue(1);
          setcenter({})

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
    ...center,
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: Svalue,
      slidesToScroll: Svalue,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
    };
  
  return (
    <div className=' md:px-20 md:py-5 w-screen h-full  relative'>
   <SectionHeader title="Reads Short"/>
    <Slider {...settings}>

    {data.map((post) => (
    <Link href={`/blog/${post.title}`} key={post.id}>
      <ShortCard {...post} />
    </Link>
  ))}
     
    </Slider>
  </div>
  )
}

export default Sread