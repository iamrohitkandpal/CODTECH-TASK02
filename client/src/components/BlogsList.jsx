import React from "react";
import BlogListItem from "./BlogListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';

const fetchBlogs = async (pageParam, searchParams) => {
  const searchParamsObj = Object.fromEntries([...searchParams]);  

  const res = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/blogs`, {
    params: { page: pageParam, limit: 5, ...searchParamsObj },
  });
  return res.data;
};

const BlogsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["blogs", searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchBlogs(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,    
  });
  
  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  const allBlogs = data?.pages.flatMap((page) => page.blogs) || [];
  
  return (
    <div className="flex flex-col gap-12 mb-8 ">
      <InfiniteScroll
        dataLength={allBlogs.length}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<h4>Loading More Blogs...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {allBlogs.map((blog) => (
          <BlogListItem key={blog._id} blog={blog} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default BlogsList;
