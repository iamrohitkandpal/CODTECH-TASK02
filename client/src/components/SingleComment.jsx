import React from 'react'
import { format } from 'timeago.js';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const SingleComment = ({comment}) => {
  const user = useUser();
  const {getToken} = useAuth();
  const role = user?.publicMetadata?.role;

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`${import.meta.env.VITE_BASE_API_URL}/comments/${comment._id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["comments", postId]});
    },
    onError: (error) => {
      toast.error("Failed to add comment: " + error.message);
    },
  });

  const handleDeleteComment = async (id) => {

  }

  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className='flex items-center gap-4'>
            {comment.user.img && (
              <img src={comment.user.img} className="w-10 h-10 rounded-full object-cover" />
            )}
            <span className='font-medium'>{comment.user.username}</span>
            <span className='text-sm text-gray-500'>{format(comment.createdAt)}</span>
            {user && (comment.user.username === user.username || role === "admin") && (
              <span className='text-xs text-red-300 hover:text-red-600 cursor-pointer' onClick={() => handleDeleteComment(comment._id)}>Delete</span>
            )}
        </div>
        <p className='mt-4'>
            {comment.desc}
        </p>
    </div>
  )
}

export default SingleComment