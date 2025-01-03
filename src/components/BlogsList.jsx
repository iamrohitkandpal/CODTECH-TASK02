import React from 'react'
import BlogListItem from './BlogListItem'

const BlogsList = () => {
  return (
    <div className='flex flex-col gap-12 mb-8 '>
        <BlogListItem />
        <BlogListItem />
        <BlogListItem />
        <BlogListItem />
        <BlogListItem />
    </div>
  )
}

export default BlogsList