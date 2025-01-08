import React from 'react'
import Image from './../components/Image';
import { Link, useParams } from 'react-router-dom';
import BlogSideMenu from './../components/BlogSideMenu';
import Search from './../components/Search';
import CommentsSection from './../components/CommentsSection';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { format } from 'timeago.js';
import DOMPurify from 'dompurify';

const fetchBlog = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/blogs/${slug}`);
  return res.data;
}

const SinglePostPage = () => {
  
  const {slug} = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => fetchBlog(slug),
  });

  if(isPending) return "Loading...";
  if(error) return "Something went wrong: " + error.message;

  return (
    <div className='flex mt-8 flex-col gap-8'>
      {/* details */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-2xl md:text3xl xl:text-4xl 2xl:text-5xl font-semibold'>{data.title}</h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className='text-blue-800'>
              {data.user.username.charAt(0).toUpperCase() + data.user.username.slice(1)}
            </Link>
            <span>on</span>
            <Link className='text-blue-800'>
              {data.category
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .filter((word) => word !== "-")
                .join(" ")
              }
            </Link>
            <span>{format(data.createdAt)}</span>
          </div>

          <p className='text-gray-500 font-medium'>{data.desc}</p>
        </div>
        {data.img && (
          <div className="hidden lg:block w-2/5">
            <Image src={data.img} w="600" className="rounded-2xl" />
          </div>
        )}
      </div>

      {/* content */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/*text*/}
        <div className='lg:text-lg flex flex-col gap-6 text-justify'>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>

        {/*side-menu*/}
        <div className='px-4 h-max sticky top-8'>
          <h1 className='mb-4 text-sm font-medium'>Author</h1>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-8'>
              {data.user.img && (
                <img src={data.user.img} className="w-12 h-12 rounded-full object-cover" />
              )}
              <Link className='text-blue-800'>
                {data.user.username.charAt(0).toUpperCase() + data.user.username.slice(1)}
              </Link>
            </div>
            <p className='text-sm text-gray-500'>Ye data maine User ke model me to dala tha operation me daalna bhool gaya aage daal dunga</p>
            <div className='flex gap-2'>
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>

          <BlogSideMenu />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>

          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      
      {/* comments */}
      <CommentsSection postId={data._id} />
    </div>
  )
}

export default SinglePostPage