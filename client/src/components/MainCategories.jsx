import React from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';

const MainCategories = () => {
  return (
    <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
        <div className='flex-1 flex items-center justify-between flex-wrap gap-4'>
            <Link to="/blogs" className='bg-blue-800 text-white rounded-full px-4 py-2'>All Posts</Link>
            <Link to="/blogs?cat=web-design" className='hover:bg-blue-50 rounded-full px-4 py-2'>Web Design</Link>
            <Link to="/blogs?cat=development" className='hover:bg-blue-50 rounded-full px-4 py-2'>Development</Link>
            <Link to="/blogs?cat=databases" className='hover:bg-blue-50 rounded-full px-4 py-2'>DataBases</Link>
            <Link to="/blogs?cat=seo" className='hover:bg-blue-50 rounded-full px-4 py-2'>Search Engines</Link>
            <Link to="/blogs?cat=marketing" className='hover:bg-blue-50 rounded-full px-4 py-2'>Marketing</Link>
        </div>

        <span className='text-xl font-medium'>|</span>

        <Search />
    </div>
  )
}

export default MainCategories