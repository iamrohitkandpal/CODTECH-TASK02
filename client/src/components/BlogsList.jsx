import React from "react";
import BlogListItem from "./BlogListItem";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const fetchBlogs = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/blogs`);
  return res.data;
};

const BlogsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["blogs", searchParams.toString()],
    queryFn: async () => {
      fetchBlogs();
    },
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col gap-12 mb-8 ">
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
    </div>
  );
};

export default BlogsList;
