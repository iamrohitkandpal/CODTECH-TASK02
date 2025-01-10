import React from "react";
import { format } from "timeago.js";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const SingleComment = ({ comment, postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const role = user?.publicMetadata?.role;
  
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(
        `${import.meta.env.VITE_BASE_API_URL}/comments/${comment._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success("Comment Deleted");
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {comment.user.img && (
            <img
              src={comment.user.img}
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
          <span className="font-medium">{comment.user.username}</span>
          <span className="text-sm text-gray-500">
            {format(comment.createdAt)}
          </span>
        </div>
        {user &&
          (comment.user.username === user.username || role === "admin") && (
            <span
              className="text-sm text-red-400 hover:text-red-600 transition-all cursor-pointer"
              onClick={() => mutation.mutate()}
            >
              Delete
              {mutation.isPending && <span>(In Progress)</span>}
            </span>
          )}
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default SingleComment;
