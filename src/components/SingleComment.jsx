import React from 'react'
import Image from './Image';

const SingleComment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className='flex items-center gap-4'>
            <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40" />
            <span className='font-medium'>John Doe</span>
            <span className='text-sm text-gray-500'>2 days ago</span>
        </div>
        <p className='mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolorum voluptatem aut optio asperiores, saepe in dolorem fugit beatae minima accusamus. Reiciendis, assumenda ipsa sapiente aut dolores magni alias inventore exercitationem labore voluptatibus modi, corrupti similique commodi quos impedit error.
        </p>
    </div>
  )
}

export default SingleComment