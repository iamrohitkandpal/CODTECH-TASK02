import React from 'react'
import Image from './Image';
import { Link } from 'react-router-dom';

const FeaturedPosts = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8 '>
        {/* Hero Post */}
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
            <Image src="featured1.jpeg" className="rounded-3xl object-cover" w="895" />
            <div className='flex items-center gap-4'>
                <h1 className='font-semibold lg:text-lg'>01.</h1>
                <Link className='text-blue-800 lg:text-lg'>Web Desgin</Link>
                <span className='text-gray-500'>2 days ago</span>
            </div>
            <Link to="/test" className='text-xl lg:text-3xl font-semibold lg:font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing.</Link>
        </div>


        {/* Secondary Posts */}
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
            <div className='lg:h-1/3 flex justify-between gap-4'>
                <div className='w-1/3 aspect-video'>
                    <Image src="featured2.jpeg" w="298" className="rounded-3xl object-cover h-full w-full" />
                </div>
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>02.</h1>
                        <Link className='text-blue-800'>Web Design</Link>
                        <span className='text-gray-500 text-sm'>2 days ago</span>
                    </div>
                    <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </Link>
                </div>
            </div>  
            <div className='lg:h-1/3 flex justify-between gap-4'>
                <div className='w-1/3 aspect-video'>
                    <Image src="featured3.jpeg" w="298" className="rounded-3xl object-cover h-full w-full" />
                </div>
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>03.</h1>
                        <Link className='text-blue-800'>Web Design</Link>
                        <span className='text-gray-500 text-sm'>2 days ago</span>
                    </div>
                    <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </Link>
                </div>
            </div>
            <div className='lg:h-1/3 flex justify-between gap-4'>
                <div className='w-1/3 aspect-video'>
                    <Image src="featured4.jpeg" w="298" className="rounded-3xl object-cover h-full w-full" />
                </div>
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>04.</h1>
                        <Link className='text-blue-800'>Web Design</Link>
                        <span className='text-gray-500 text-sm'>2 days ago</span>
                    </div>
                    <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedPosts