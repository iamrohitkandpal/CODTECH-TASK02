import React from 'react'
import SingleComment from './SingleComment';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useAuth, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';

const fetchComments = async (postId) => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/comments/${postId}`);
  return res.data;
}

const CommentsSection = ({postId}) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_BASE_API_URL}/comments/${postId}`, newComment, {
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

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const formData = new FormData(e.target);
    
    const desc = formData.get("desc");
  
    if (!desc || desc.trim() === "") {
      toast.error("Comment cannot be empty!");
      return;
    }
  
    const data = {
      desc: desc.trim(), // Trim whitespace to ensure no empty data is sent
    };
    
    mutation.mutate(data); // Call the mutation function
  };
  
  return (
    <div className='flex flex-col gap-8 lg:w-3/5 mb-12'>
        <h1 className='text-left text-gray-500 underline'>Comments</h1>
        <form onSubmit={handleSubmit} className='flex items-center justify-between gap-8 w-full'>
            <textarea name="desc" rows="4" className='w-full p-4 outline-none resize-none rounded-xl' placeholder='Write a comment...'></textarea>
            <button className='bg-blue-800 px-4 py-3 text-white font-medium rounded-xl'>Send</button>
        </form>
        {isPending 
          ? "Loading Comments..." 
          : error ? "Error Loading Comments" 
          : <>
              {mutation.isPending && (
                <SingleComment comment={{
                  desc: `${mutation.variables.desc} (Sending...)`,
                  createdAt: new Date(),
                  user: {
                    img: user.imageUrl,
                    username: user.username,
                  }
                }} />
              )}

              {data.map((comment) => (
                <SingleComment key={comment._id} comment={comment} postId={postId} />
              ))}
            </>
        }
    </div>
  )
}

export default CommentsSection