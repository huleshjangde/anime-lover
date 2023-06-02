import React from 'react'

const SectionHeader = ({title}) => {
  return (
   <> <p className="heading text-lg font-medium px-2 md:px-10 w-fit">{title}</p>
   <div className='mb-5 mt-3 text-center'>
   <hr className=' mx-5 md:mx-10'/>
   <div className='w-7 h-0.5 bg-black mx-5 md:mx-10'></div>
   </div></>
  )
}

export default SectionHeader