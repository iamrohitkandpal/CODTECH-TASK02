import React from 'react'
import Image from './Image';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { format } from 'timeago.js';

const fetchBlog = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/blogs?featured=true&limit=4&sort=newest`);
    return res.data;
  }

const FeaturedPosts = () => {

    const { isPending, error, data } = useQuery({
      queryKey: ["featuredBlogs"],
      queryFn: () => fetchBlog(),
    });

    if (isPending) return "Loading...";
    if (error) return "Something went wrong: " + error.message;

    const blogs = data.blogs;
    if(!blogs || blogs.length === 0) return;
    console.log(blogs);
    

  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8 '>
        {/* Hero Post */}
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
            {blogs[0].img && (
                <Image src={blogs[0].img} className="rounded-3xl object-cover" w="895" />
            )}
            <div className='flex items-center gap-4'>
                <h1 className='font-semibold lg:text-lg'>01.</h1>
                <Link className='text-blue-800 lg:text-lg'>{
                    blogs[0].category
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .filter((word) => word !== "-")
                        .join(" ")
                }</Link>
                <span className='text-gray-500'>{format(blogs[0].createdAt)}</span>
            </div>
            <Link to={blogs[0].slug} className='text-xl lg:text-3xl font-semibold lg:font-bold'>{blogs[0].title}</Link>
        </div>


        {/* Secondary Posts */}
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
            <div className='lg:h-1/3 flex justify-between gap-4'>
                <div className='w-1/3 aspect-video'>
                    {blogs[1].img && (
                        <Image src={blogs[1].img} className="rounded-3xl object-cover" w="895" />
                    )}
                </div>
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>02.</h1>
                        <Link className='text-blue-800'>{
                            blogs[1].category
                                .split("-")
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .filter((word) => word !== "-")
                                .join(" ")
                        }</Link>
                        <span className='text-gray-500 text-sm'>{format(blogs[1].createdAt)}</span>
                    </div>
                    <Link to={blogs[1].slug} className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>
                        {blogs[1].title}
                    </Link>
                </div>
            </div>  
            <div className='lg:h-1/3 flex justify-between gap-4'>
                <div className='w-1/3 aspect-video'>
                    {blogs[2].img && (
                        <Image src={blogs[2].img} className="rounded-3xl object-cover" w="895" />
                    )}
                </div>
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>03.</h1>
                        <Link className='text-blue-800'>{
                            blogs[2].category
                                .split("-")
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .filter((word) => word !== "-")
                                .join(" ")
                        }</Link>
                        <span className='text-gray-500 text-sm'>{format(blogs[2].createdAt)}</span>
                    </div>
                    <Link to={blogs[2].slug} className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>
                        {blogs[2].title}
                    </Link>
                </div>
            </div>
            <div className='lg:h-1/3 flex justify-between gap-4'>
                <div className='w-1/3 aspect-video'>
                    {blogs[3].img && (
                        <Image src={blogs[3].img} className="rounded-3xl object-cover" w="895" />
                    )}
                </div>
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>04.</h1>
                        <Link className='text-blue-800'>{
                            blogs[3].category
                                .split("-")
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .filter((word) => word !== "-")
                                .join(" ")
                        }</Link>
                        <span className='text-gray-500 text-sm'>{format(blogs[3].createdAt)}</span>
                    </div>
                    <Link to={blogs[3].slug} className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>
                        {blogs[3].title}
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedPosts