import React from 'react'
import { format } from 'timeago.js';

const SingleComment = ({comment}) => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className='flex items-center gap-4'>
            {comment.user.img && (
              <img src={comment.user.img} className="w-10 h-10 rounded-full object-cover" />
            )}
            <span className='font-medium'>{comment.user.username}</span>
            <span className='text-sm text-gray-500'>{format(comment.createdAt)}</span>
        </div>
        <p className='mt-4'>
            {comment.desc}
        </p>
    </div>
  )
}

export default SingleComment