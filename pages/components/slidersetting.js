// carouselSettings.js
import React from 'react';

const [Svalue, setValue] = useState(3);
const [center, setcenter] = useState({})

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

export default settings;
