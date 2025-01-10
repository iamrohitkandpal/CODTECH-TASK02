import React from "react";
import Image from "./Image";
import { Link, useParams } from "react-router-dom";
import { format } from "timeago.js";
import { useQuery } from "@tanstack/react-query";


const BlogListItem = ({ blog }) => {


  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {blog.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image
            src={blog.img || "postImg.jpeg"}
            className="rounded-2xl object-cover"
            w="735"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${blog.slug}`} className="text-4xl font-semibold">
          {blog.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800" to={`/blogs?author=${blog.user.username}`}>
            {blog.user.username.charAt(0).toUpperCase() + blog.user.username.slice(1)}
          </Link>
          <span>on</span>
          <Link className="text-blue-800">
            {blog.category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .filter((word) => word !== "-")
              .join(" ")
            }
          </Link>
          <span>{format(blog.createdAt)}</span>
        </div>
        <p>{blog.desc}</p>
        <Link
          to={`/${blog.slug}`}
          className="underline text-sm text-blue-800"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogListItem;
