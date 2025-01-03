import React from "react";
import BlogsList from './../components/BlogsList';
import SideMenu from "../components/SideMenu";

const AllPosts = () => {
  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blogs</h1>
      <div className="flex gap-8">
        <div className="">
          <BlogsList />
        </div>
        <div className="">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
