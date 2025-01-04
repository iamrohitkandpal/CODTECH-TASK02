import React, { useState } from "react";
import BlogsList from "./../components/BlogsList";
import SideMenu from "../components/SideMenu";

const AllPosts = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blogs</h1>
      <button onClick={() => setOpen((prev) => !prev)} className="bg-blue-800 md:hidden text-sm text-white py-2 px-4 rounded-2xl mb-4">
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="">
          <BlogsList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
