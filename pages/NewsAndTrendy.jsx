import React from 'react'
import SectionHeader from './components/SectionHeader'
import BlogSection from './BlogSection'
import { data } from '../data'
import Link from 'next/link'

const NewsAndTrendy = () => {
  return (
   <>
    <div className='md:px-20 w-screen h-full'>
   <SectionHeader title="New & Trendy"/>
   <Link href={`/blog/${data[2].title}`}>
   <BlogSection pnum={2}/>
   


        </Link>
   <Link href={`/blog/${data[6].title}`}>

        <BlogSection pnum={6} rev="flex-row-reverse"/>
        </Link>
   </div>

   </>
  )
}

export default NewsAndTrendy