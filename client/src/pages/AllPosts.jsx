import React, { useState } from "react";
import BlogsList from "./../components/BlogsList";
import SideMenu from "../components/SideMenu";
import { useSearchParams } from "react-router-dom";

const AllPosts = () => {
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();

  // Extract parameters from URL
  const category = searchParams.get("cat");
  const sort = searchParams.get("sort");
  const author = searchParams.get("author");
  const isFeatured = searchParams.get("featured") === "true";

  // Determine the title dynamically
  let title = "Blogs Are Below This Look There";

  if (isFeatured) {
    title = "Featured Blogs";
  } else if (author) {
    title = `Blogs by ${author.charAt(0).toUpperCase() + author.slice(1)}`;
  } else if (category) {
    title = `${category.charAt(0).toUpperCase() + category.slice(1)} Blogs`; // Capitalize category
  }

  if (sort && !isFeatured && !author) {
    const sortTitleMap = {
      newest: "Newest",
      oldest: "Oldest",
      popular: "Popular",
      trending: "Trending",
    };
    const sortTitle = sortTitleMap[sort];
    if (sortTitle) {
      title = `${sortTitle} ${category ? category.charAt(0).toUpperCase() + category.slice(1) : ""} Blogs`.trim();
    }
  }

  return (
    <div>
      <h1 className="mb-8 text-2xl">{title}</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 md:hidden text-sm text-white py-2 px-4 rounded-2xl mb-4"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div>
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
