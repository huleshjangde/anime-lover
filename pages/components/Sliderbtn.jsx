//next-pre components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button  className="">
      <FontAwesomeIcon icon={faArrowRight} className='text-lg font-light w-3 h-3  absolute -top-16 rounded-full right-3 md:right-9 p-2 border-2 border-black ' onClick={onClick} />

      </button>
    );
  };
  
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="">
      <FontAwesomeIcon icon={faArrowLeft} className="text-lg font-light w-3 h-3 absolute -top-16 rounded-full right-16 md:right-20 p-2 border-2 border-black" onClick={onClick} />
    </button>
    
    );
  };
  export {CustomNextArrow,CustomPrevArrow}